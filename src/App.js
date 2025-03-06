import React, { useState, useEffect, useRef } from 'react';
import { Input, message, Button } from 'antd';
import axios from 'axios';
import dayjs from 'dayjs';
import { post, put } from './api';
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

  function videoExamin(username, source) {
    // 发送 PUT 请求
    axios.put('/v1/vcr/media', {
      "userName": username,
      "source": `http://127.0.0.1:10088${source}`
    }, { headers: { 'X-User-Name': "none" } })
      .then(response => {
        console.log('视频审核-请求成功:', response.data);
        // 需要保存返回视频的审核任务ID taskId 和资源连接 source 方便后续查询视频审核状态
        let obj = {
          order: username,
          taskId: response?.data?.taskId,
          source: response?.data?.source,
          createTime: response?.data?.createTime
        }
        videoList.push(obj)
        const newArray = [...videoList]
        setVideomap(newArray)
      })
      .catch(error => {
        console.error('PUT 请求失败:', error);
      });
  }

  function audioExamin(username, source) {
    // 发送 PUT 请求
    axios.put('/v1/vcr/audio', {
      "userName": username,
      "source": `http://127.0.0.1:10088${source}`
    }, { headers: { 'X-User-Name': "none" } })
      .then(response => {
        console.log('音频审核-请求成功:', response.data);
        // 需要保存返回视频的审核任务ID taskId 和资源连接 source 方便后续查询视频审核状态
        let obj = {
          order: username,
          taskId: response?.data?.taskId,
          source: response?.data?.source,
          createTime: response?.data?.createTime
        }
        audioList.push(obj)
        const newArray = [...audioList]
        setAudiomap(newArray)
      })
      .catch(error => {
        console.error('PUT 请求失败:', error);
      });
  }

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
            videoExamin(order, `/file/api/v1/download?${response.video}`)
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
            audioExamin(order, `/file/api/v1/download?${response.audio}`)
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


  const [videoResult, setVideoResult] = useState([]);
  const [audioResult, setAudioResult] = useState([]);

  async function videoResultQuery(data) {
    const results = [];
    for (const item of data) {
      try {
        await axios.get('/v1/vcr/media', {
          params: {
            taskId: item.taskId,
            source: item.source
          },
          headers: { 'X-User-Name': "none" }
        }).then(res => {
          // console.log('video', res)
          results.push(res.data);
        }).catch(err => {
          console.log(err)
        })
      } catch (error) {
        console.error(`请求时出错:`, error);
      }
    }
    setVideoResult(results);
  }

  async function audioResultQuery(data) {
    const results = [];
    for (const item of data) {
      try {
        await axios.get('/v1/vcr/audio', {
          params: {
            taskId: item.taskId,
            source: item.source
          },
          headers: { 'X-User-Name': "none" }
        }).then(res => {
          // console.log('audio', res)
          results.push(res.data);
        }).catch(err => {
          console.log(err)
        })
      } catch (error) {
        console.error(`请求时出错:`, error);
      }
    }
    setAudioResult(results);
  }

  // 获取音视频审核结果 并且展示到界面
  useEffect(() => {
    videoResultQuery(videomap)
    audioResultQuery(audiomap)
  }, [videomap, audiomap])

  useEffect(() => {
    console.log('视频审核结果', videoResult)
    console.log('音频审核结果', audioResult)
  }, [videoResult, audioResult])

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

  // 合并数组排序并展示结果
  function concatResult(videodata, audiodata) {
    let newArr = videodata.concat(audiodata)
    let resultList = []
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i]['icrCheckResults']) {
        resultList.push(newArr[i])
      }
    }
    return resultList;
  }

  return (
    <div>
      {contextHolder}
      <div style={{ width: '100%', height: 20 }}></div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderRadius: 6 }}>
        <div style={{ flex: '0 0 auto', width: 20, height: window.innerHeight - 200, background: '#fff' }}></div>
        <div style={{ flex: 1, height: window.innerHeight - 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* 直播流播放 */}
          <div style={{ width: '100%', height: '100%', border: '1px solid #ccc', background: '#000' }} id="video" className='video-container'></div>
        </div>
        <div style={{ flex: '0 0 auto', width: 460, marginLeft: 20, height: window.innerHeight - 200, background: '#fff', position: 'relative' }}>
          <div style={{ position: 'absolute', height: '100%', width: 20, background: '#fff', right: 0 }}></div>
          <Search
            style={{ width: 370, border: '1px solid rgba(0,0,0,0)' }}
            placeholder="请输入直播流地址"
            allowClear
            enterButton="审核"
            // size="small"
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

                setAudioResult([])
                setVideoResult([])
                setAudiomap([])
                setVideomap([])

                if (text.trim().length) {
                  setStop(false)
                  playRtsp(text, 9999)

                  // 设置审核存储文件夹名称 流地址+时间戳
                  let dirname = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}`
                  recursionDesiredVideo(text, 30, dirname, 1)
                  recursionDesiredAudio(text, 30, dirname, 1)
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
            style={{ marginLeft: 10 }}
            onClick={() => {
              setStop(true)
              stopRtsp()
            }}
            // size="small"
            type='primary' danger>停止</Button>
          <div style={{ width: '100%', height: window.innerHeight - 260, overflowY: 'scroll' }}>
            <div style={{ marginTop: 6, marginBottom: 6, fontSize: 13 }}>直播审核结果</div>
            {
              concatResult(videoResult, audioResult)?.map((i, n) => {
                return (
                  <div style={{ marginBottom: 6, fontSize: 12, color: '#303540', padding: 6 }} key={n}>
                    {/* {n + 1}:{i.source} */}
                    <div style={{ color: '#84868c' }}>{dayjs(i.createTime).format('YYYY-MM-DD HH:mm:ss')}</div>
                    <div style={{ color: '#151b26' }}>当前审核结果，文字只杀的机会哈萨克等哈就会感到撒对话框i死的活该u肯定是概况，大厦公司的合法当前审核结果，文字只杀的机会哈萨克等哈就会感到撒对话框i死的活该u肯定是概况，大厦公司的合法</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
