import React, { useState, useEffect, useRef } from 'react';
import { Input, message, Button } from 'antd';
import { post } from './api';
import JSMpeg from "@cycjimmy/jsmpeg-player";

const { Search } = Input;

function App() {
  const [stop, setStop] = useState(false);
  const [videomap, setVideomap] = useState([]);
  const [audiomap, setAudiomap] = useState([]);
  const [searchRTSP, setSearchRTSP] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  var videoList = [];
  var audioList = [];


  const recursionDesiredVideo = async (url, time, name, order) => {
    try {
      await post(
        '/live/api/v1/stream/video',
        {
          "stream_url": url,
          "slicing_time": time,
          "stream_name": name,
          "order": order
        })
        .then(response => {
          console.log('返回视频片段', response)
          if (response.video) {
            let obj = {
              order,
              url: `/file/api/v1/download?${response.video}`
            }
            videoList.push(obj)

            const newArray = [...videoList]
            setVideomap(newArray)

            console.log('------我的状态是------', stop)
            if (stop) { return }
            order++
            recursionDesiredVideo(url, time, name, order);
          } else {
            messageApi.info('请检查当前直播流是否可用!')
          }
        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
      console.error('请求出错: ', error);
    }
  }

  const recursionDesiredAudio = async (url, time, name, order) => {
    try {
      await post(
        '/live/api/v1/stream/audio',
        {
          "stream_url": url,
          "slicing_time": time,
          "stream_name": name,
          "order": order
        })
        .then(response => {
          console.log('返回音频片段', response)
          if (response.audio) {
            let obj = {
              order,
              url: `/file/api/v1/download?${response.audio}`
            }
            audioList.push(obj)

            const newArray = [...audioList]
            setAudiomap(newArray)

            console.log('------我的状态是------', stop)
            if (stop) { return }

            order++
            recursionDesiredAudio(url, time, name, order);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
      console.error('请求出错: ', error);
    }
  }

  function playRtsp(url, wsport) {
    post(
      '/live/api/v1/stream/play',
      {
        "stream_url": url,
        "wsport": wsport
      })
      .then(response => {
        console.log(response)
        // 根据你后端 RTSP 推流服务转的 WebSocket 地址修改
        new JSMpeg.VideoElement('#video', `ws://localhost:${wsport}`);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function stopRtsp(url, wsport) {
    post(
      '/live/api/v1/stream/closews',
      {
        "stream_url": url,
        "wsport": wsport
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error);
      });
  }

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    // 在组件卸载时移除事件监听器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // 取消事件的默认动作
      event.preventDefault();
      // Chrome 需要设置 returnValue
      event.returnValue = '用户即将离开页面';
      // 可以在这里添加自定义逻辑，例如询问用户是否确认离开
      console.log('用户即将离开页面');
      setStop(true);
      stopRtsp();
      return '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      {contextHolder}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '70%', height: window.innerHeight, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* 直播流播放 */}
          <div style={{ width: '100%', height: '100%', border: '1px solid #ccc', background: '#000' }} id="video" className='video-container'></div>
        </div>
        <div style={{ width: '30%', height: window.innerHeight }}>
          <Search
            placeholder="请输入直播流"
            allowClear
            enterButton="审核"
            size="large"
            value={searchRTSP}
            onChange={(e) => {
              setSearchRTSP(e.target.value)
            }}
            onSearch={(text) => {
              messageApi.destroy()
              const rtspRegex = /^rtsp:\/\/(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])(\.([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]))*|\[[a-fA-F0-9:]+])(:\d+)?(\/[a-zA-Z0-9\-._~%!$&'()*+,;=:@]+(\/[a-zA-Z0-9\-._~%!$&'()*+,;=:@]+)*)*$/;
              const rtmpRegex = /^rtmp:\/\/([a-zA-Z0-9\-._~%]+|\[[a-fA-F0-9:]+\])(:\d+)?(\/[a-zA-Z0-9\-._~%!$&'()*+,;=:@]+)?(\/[a-zA-Z0-9\-._~%!$&'()*+,;=:@]+)?$/;
              const m3u8Regex = /^https?:\/\/([a-zA-Z0-9\-._~%]+|\[[a-fA-F0-9:]+\])(:\d+)?(\/[a-zA-Z0-9\-._~%!$&'()*+,;=:@]+)*\/[a-zA-Z0-9\-._~%!$&'()*+,;=:@]+\.m3u8$/;
              if (rtspRegex.test(text) || rtmpRegex.test(text) || m3u8Regex.test(text)) {
                // RTSP 本地模拟连接
                // rtsp://localhost:8554/test
                // RTMP 公网测试连接
                //  rtmp://liteavapp.qcloud.com/live/liteavdemoplayerstreamid
                // M3U8
                // http://220.161.87.62:8800/hls/0/index.m3u8
                videoList = []
                audioList = []
                if (text.trim().length) {
                  setStop(false)
                  playRtsp(text, 9999)
                  recursionDesiredVideo(text, 30, "cf_video", 1)
                  recursionDesiredAudio(text, 30, "cf_audio", 1)
                  setSearchRTSP('')
                } else (
                  messageApi.info('请输入直播流!')
                )
              } else {
                messageApi.info('请输入有效的直播流地址!')
              }

            }}
          />
          <Button
            onClick={() => {
              setStop(true)
              stopRtsp()
            }}
            type='primary' danger>停止</Button>
          <Button
            onClick={() => {
              setVideomap([])
              setAudiomap([])
            }}
            type='primary' danger>清空</Button>
          <div style={{ width: '100%', height: window.innerHeight - 60, overflowY: 'scroll', border: '1px solid #ccc' }}>
            <div>------video------</div>
            {
              videomap?.map((i, n) => {
                return (
                  <div style={{ marginBottom: 6 }} key={n}>{n + 1}:{i.url}</div>
                )
              })
            }
            <div>------audio------</div>
            {
              audiomap?.map((i, n) => {
                return (
                  <div style={{ marginBottom: 6 }} key={n}>{n + 1}:{i.url}</div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
