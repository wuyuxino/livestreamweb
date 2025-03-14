import React, { useState, useEffect, useRef } from 'react';
import { Input, message, Button, Space, Table, Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import axios from 'axios';
import dayjs from 'dayjs';
import { get, post, put } from './api';
import JSMpeg from "@cycjimmy/jsmpeg-player";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { mnsj, presetType, oneType, subType } from './data';

const { Search } = Input;

function App() {
  const [stop, setStop] = useState(true);
  const [showvideo, setShowvideo] = useState(false);
  const [videomap, setVideomap] = useState([]);
  const [audiomap, setAudiomap] = useState([]);
  const [searchRTSP, setSearchRTSP] = useState('');
  const [searchRTSPURL, setSearchRTSPURL] = useState(''); // 存储审核数据使用得
  const [searchTime, setSearchTime] = useState(''); // 存储审核数据使用得
  const [messageApi, contextHolder] = message.useMessage();
  var videoList = [];
  var audioList = [];

  function videoExamin(username, source) {
    // 发送 PUT 请求
    axios.put('/v1/vcr/media', {
      "userName": username,
      "source": `http://127.0.0.1:10088${source}`
    }, { headers: { 'X-User-Name': "testjxm" } })
      .then(response => {
        console.log('视频审核-请求成功:', response.data);
        // 需要保存返回视频的审核任务ID taskId 和资源连接 source 方便后续查询视频审核状态
        let obj = {
          presetId: response?.data?.presetId,
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
    }, { headers: { 'X-User-Name': "testjxm" } })
      .then(response => {
        console.log('音频审核-请求成功:', response.data);
        // 需要保存返回视频的审核任务ID taskId 和资源连接 source 方便后续查询视频审核状态
        let obj = {
          presetId: response?.data?.presetId,
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
        setShowvideo(true)
        new JSMpeg.VideoElement('#video', `ws://localhost:${wsport}`);
      })
      .catch(error => {
        setShowvideo(false)
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
        setShowvideo(false)
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
          headers: { 'X-User-Name': "testjxm" }
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
          headers: { 'X-User-Name': "testjxm" }
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

  // 存储当前审核结果到服务端
  function saveData(videoResult, audioResult) {
    // let endArr = concatResult(videoResult, audioResult);
    let endArr = videoResult.concat(audioResult);
    let obj = {
      time: searchTime,
      link: searchRTSPURL
    }
    endArr.unshift(obj);
    if (endArr.length == 1) { return }
    post('/storage/api/v1/data/save',
      {
        audit_records: endArr
      }).then(req => {
        console.log('我是要存储的审核信息', req)
      }).catch(err => {
        console.log(err)
      })
  }


  const [tableData, setTableData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 获取审核记录
  async function getStorage() {
    await get('/storage/api/v1/data/search')
      .then(req => {
        console.log('审核记录列表', req)
        let newArr = []
        for (let i = 0; i < req.data.length; i++) {
          let obj = {
            path: req.data[i]['path'],
            adress: JSON.parse(req.data[i]['content'])?.[0]?.['link'],
            time: JSON.parse(req.data[i]['content'])?.[0]?.['time'],
            record: JSON.parse(req.data[i]['content'])
          }
          newArr.push(obj)
        }
        newArr.sort((a, b) => { return new Date(b.time).getTime() - new Date(a.time).getTime() })
        setTableData(newArr)
      }).catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getStorage()
  }, [])

  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [removeFileName, setRemoveFileName] = useState('');
  // 删除审核记录 
  // 获取审核记录
  async function removeStorage(filename) {
    messageApi.destroy()
    await post('/storage/api/v1/data/remove',
      {
        file_name: filename
      }
    )
      .then(req => {
        console.log(req)
        getStorage()
        messageApi.info('删除成功')
      }).catch(err => {
        console.log(err)
      })
  }

  const [violationRecord, setViolationRecord] = useState([]);

  const columns = [
    {
      title: '序号',
      dataIndex: 'order',
      key: 'order',
      width: 100,
      render: (text, record, index) => <a>{index + 1}</a>,
    },
    {
      title: '直播流地址',
      dataIndex: 'adress',
      key: 'adress',
    },
    {
      title: '审核时间',
      dataIndex: 'time',
      key: 'time',
      width: 300,
    },
    {
      title: '操作',
      key: 'record',
      width: 300,
      render: (text, record, index) => (
        <Space size="middle">
          <a
            onClick={() => {
              setViolationRecord(record.record)
              setIsModalOpen(true);
            }}>
            查看记录
          </a>
          <a
            style={{ color: 'red' }}
            onClick={() => {
              console.log(text.path)
              let filename = text.path.slice(text.path.lastIndexOf('auditlog'))
              setRemoveFileName(filename)
              setIsRemoveModalOpen(true)
            }}>
            删除
          </a>
        </Space>
      ),
    },
  ];

  const [fileModel, setFileModel] = useState(false);
  const [fileList, setFileList] = useState([]);

  // 审核文件删除
  function fileRemove(filename) {
    messageApi.destroy()
    post('/storage/api/v1/file/remove',
      {
        file_name: filename
      }
    )
      .then(req => {
        console.log(req)
        getFileName()
        messageApi.info('删除成功')
      }).catch(err => {
        console.log(err)
      })
  }

  const [isRemoveFileModalOpen, setIsRemoveFileModalOpen] = useState(false);
  const [isRemoveFileName, setIsRemoveFileName] = useState('');
  // 审核文件
  const columnsfile = [
    {
      title: '序号',
      dataIndex: 'order',
      key: 'order',
      width: 100,
      render: (text, record, index) => <a>{index + 1}</a>,
    },
    {
      title: '文件位置',
      dataIndex: 'onefile',
      key: 'onefile',
      render: (text, record, index) => <div>/VideoSlicing/{text}</div>
    },
    {
      title: '创建时间',
      dataIndex: 'onefile',
      key: 'onefile',
      width: 300,
      render: (text, record, index) => <div>
        {dayjs(new Date(`${text.split('-')[0]}-${text.split('-')[1]}-${text.split('-')[2]}  ${text.split('-')[3]}:${text.split('-')[4]}`).getTime()).format('YYYY-MM-DD HH:mm:ss')}
      </div>
    },
    {
      title: '操作',
      key: 'record',
      width: 300,
      render: (text, record, index) => (
        <Space size="middle">
          <a
            onClick={() => {
              setFileList(record.twofile)
              setFileModel(true);
            }}>
            查看文件
          </a>
          <a
            style={{ color: 'red' }}
            onClick={() => {
              setIsRemoveFileName(text.onefile)
              setIsRemoveFileModalOpen(true)
            }}>
            删除
          </a>
        </Space>
      ),
    },
  ];
  // dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
  const [tableDataFile, setTableDataFile] = useState([]);

  // 获取审核文件夹及其内部文件
  function getFileName() {
    get('/storage/api/v1/file/search')
      .then(req => {
        console.log(req)
        let arr = req.data.sort((a, b) => {

          return new Date(`${b.onefile.split('-')[0]}-${b.onefile.split('-')[1]}-${b.onefile.split('-')[2]}  ${b.onefile.split('-')[3]}:${b.onefile.split('-')[4]}`).getTime() - new Date(`${a.onefile.split('-')[0]}-${a.onefile.split('-')[1]}-${a.onefile.split('-')[2]}  ${a.onefile.split('-')[3]}:${a.onefile.split('-')[4]}`).getTime()
        })
        setTableDataFile(req.data)
      }).catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getFileName();
  }, [])

  return (
    <div>
      {contextHolder}
      <div style={{ width: '100%', height: 20 }}></div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 6 }}>
        <div style={{ flex: '0 0 auto', width: 20, height: 650, background: '#FFF' }}></div>
        <div style={{ flex: 1, height: 650, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 4, background: '#FFF', flexDirection: 'column', boxShadow: '0 2px 8px rgba(7,12,20,.12156862745098039)' }}>
          {/* 输入直播流审核 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', width: '100%' }}>
            <div style={{ fontSize: 14, color: '#000', width: 100, lineHeight: '50px', marginLeft: 10 }}>
              直播审核
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Search
                style={{ width: 520 }}
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
                    setSearchTime(dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'))
                    setSearchRTSPURL(searchRTSP)
                    saveData(videoResult, audioResult)
                    // RTSP 本地模拟连接
                    // rtsp://localhost:8554/test
                    // RTMP 公网测试连接
                    // rtmp://liteavapp.qcloud.com/live/liteavdemoplayerstreamid
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
                  setTimeout(() => {
                    getStorage()
                  }, 1000);
                }}
              />
              <Button
                style={{ marginLeft: 10, marginRight: 10 }}
                onClick={() => {
                  setShowvideo(false)
                  saveData(videoResult, audioResult)
                  setStop(true)
                  stopRtsp()

                  videoList = []
                  audioList = []
                  setAudioResult([])
                  setVideoResult([])
                  setAudiomap([])
                  setVideomap([])

                  setTimeout(() => {
                    getStorage()
                  }, 1000);
                }}
                // size="small"
                type='primary' danger>
                停止
              </Button>
            </div>
          </div>
          {/* 直播流播放 */}
          <div style={{ display: showvideo ? 'block' : 'none', width: '100%', height: '100%', background: '#000', position: 'relative' }} id="video" className='video-container'></div>
          <div style={{ width: '100%', height: '100%', display: showvideo ? 'none' : 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', background: '#041028' }} id="video">
            <div style={{ fontSize: 16, color: '#999', letterSpacing: 1, fontWeight: '600' }}>
              NO VIDEO
            </div>
          </div>
        </div>
        <div style={{ flex: '0 0 auto', width: 460, marginLeft: 20, marginRight: 20, height: 650, background: '#fff', position: 'relative', boxShadow: '0 2px 8px rgba(7,12,20,.12156862745098039)', borderRadius: 4 }}>
          <div style={{ position: 'absolute', height: 650, background: '#FFF', width: 18, right: 0 }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', width: '100%' }}>
            <div style={{ fontSize: 14, color: '#000', width: 100, lineHeight: '50px', marginLeft: 10 }}>
              审核结果
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            </div>
          </div>

          <div style={{ width: '100%', height: 600, overflowX: 'hidden', overflowY: 'scroll' }}>
            <div style={{ position: 'relative', width: '100%', height: 600, display: concatResult(videoResult, audioResult).length == 0 ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center' }}>
              <ExclamationCircleFilled style={{ fontSize: 32, color: '#1890ff' }} />
              <div style={{ position: 'absolute', marginTop: 90, fontSize: 12, color: '#999' }}>
                暂无违规内容
              </div>
            </div>
            {
              // concatResult(videoResult, audioResult)?  // mnsj
              concatResult(videoResult, audioResult)?.map((i, n) => {
                if (i.icrCheckResults.length == 0) return;
                return (
                  <div style={{ marginBottom: 6, fontSize: 12, color: '#303540', padding: 6 }} key={n}>
                    {/* {n + 1}:{i.source} */}
                    <div style={{ color: '#84868c' }}>{dayjs(i.createTime).format('YYYY-MM-DD HH:mm:ss')}</div>
                    {
                      i.icrCheckResults.map((ii, nn) => {
                        return (
                          <div style={{ color: '#151b26' }} key={{ nn }}>
                            {
                              ii.items.map((iii, nnn) => {
                                return (
                                  <div key={nnn}>
                                    <div style={{ marginTop: 6, marginBottom: 6 }}>
                                      {presetType.get(iii?.presetType)}/{oneType.get(iii?.type)}{subType.get(iii?.subType) ? '/' : ''}{subType.get(iii?.subType)}
                                      <br />
                                    </div>
                                    <PhotoProvider>
                                      <PhotoView src={iii?.evidence?.thumbnail}>
                                        <div style={{ position: 'relative', width: 120, height: 180, background: 'red' }}>
                                          <img src={iii?.evidence?.thumbnail} width={'100%'} height={'100%'} />
                                          <img style={{ position: 'absolute', top: 4, right: 4, width: 12, height: 12 }} src={require('./images/amplify.png')} />
                                        </div>
                                      </PhotoView>
                                    </PhotoProvider>
                                    <div style={{ height: 0.5, background: 'linear-gradient(to right, transparent, #000, transparent)', margin: "20px 0" }}></div>
                                  </div>
                                )
                              })
                            }
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* 审核记录表格-start */}
      <div style={{ padding: 20 }}>
        <div style={{ width: '100%', background: '#FFF', boxShadow: '0 2px 8px rgba(7,12,20,.12156862745098039)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', width: '100%' }}>
            <div style={{ fontSize: 14, color: '#000', width: 100, lineHeight: '50px', marginLeft: 10 }}>
              审核记录
            </div>
          </div>
          {/* table */}
          <Table columns={columns} dataSource={tableData} />
          {/* table */}
        </div>
      </div>
      {/* 审核记录表格-end */}
      {/* 审核文件表格-start */}
      <div style={{ padding: 20 }}>
        <div style={{ width: '100%', background: '#FFF', boxShadow: '0 2px 8px rgba(7,12,20,.12156862745098039)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', width: '100%' }}>
            <div style={{ fontSize: 14, color: '#000', width: 100, lineHeight: '50px', marginLeft: 10 }}>
              审核文件
            </div>
          </div>
          {/* table */}
          <Table columns={columnsfile} dataSource={tableDataFile} />
          {/* table */}
        </div>
      </div>
      {/* 审核文件表格-end */}
      {/* 查看记录弹框-start */}
      <Modal
        title="违规记录"
        open={isModalOpen}
        okText={'确定'}
        width={620}
        onCancel={() => { setIsModalOpen(false); }}
        footer={[
          <Button key="ok" type="primary" onClick={() => { setIsModalOpen(false); }}>
            确定
          </Button>,
          // 不添加取消按钮
        ]}>
        <div style={{ marginTop: 30, marginBottom: 30, display: concatResult(violationRecord, []).length == 0 ? 'block' : 'none', fontSize: 12, color: '#999' }}>
          暂无违规记录
        </div>
        {
          concatResult(violationRecord, [])?.map((i, n) => {
            if (i.icrCheckResults.length == 0) return;
            return (
              <div style={{ marginBottom: 6, fontSize: 12, color: '#303540', padding: 6 }} key={n}>
                {/* {n + 1}:{i.source} */}
                <div style={{ color: '#84868c' }}>{dayjs(i.createTime).format('YYYY-MM-DD HH:mm:ss')}</div>
                {
                  i?.icrCheckResults.map((ii, nn) => {
                    return (
                      <div style={{ color: '#151b26' }} key={{ nn }}>
                        {
                          ii.items.map((iii, nnn) => {
                            return (
                              <div key={nnn}>
                                <div style={{ marginTop: 6, marginBottom: 6 }}>
                                  {presetType.get(iii?.presetType)}/{oneType.get(iii?.type)}{subType.get(iii?.subType) ? '/' : ''}{subType.get(iii?.subType)}
                                  <br />
                                </div>
                                <PhotoProvider>
                                  <PhotoView src={iii?.evidence?.thumbnail}>
                                    <div style={{ position: 'relative', width: 120, height: 180, background: 'red' }}>
                                      <img src={iii?.evidence?.thumbnail} width={'100%'} height={'100%'} />
                                      <img style={{ position: 'absolute', top: 4, right: 4, width: 12, height: 12 }} src={require('./images/amplify.png')} />
                                    </div>
                                  </PhotoView>
                                </PhotoProvider>
                                <div style={{ height: 0.5, background: 'linear-gradient(to right, transparent, #000, transparent)', margin: "20px 0" }}></div>
                              </div>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </Modal>
      {/* 查看记录弹框-end */}

      {/* 确定删除提示框-start */}
      <Modal
        title="审核记录"
        open={isRemoveModalOpen}
        okText={'确定'}
        cancelText={'取消'}
        onOk={() => {
          setIsRemoveModalOpen(false);
          removeStorage(removeFileName);
        }}
        width={620}
        onCancel={() => { setIsRemoveModalOpen(false); }}>
        <p>是否删除当前审核记录！</p>
      </Modal>
      {/* 确定删除提示框-end */}

      {/* 查看文件弹出框 */}
      <Modal
        title="审核文件"
        open={fileModel}
        okText={'确定'}
        cancelText={'取消'}
        onOk={() => {
          setFileModel(false);
        }}
        width={620}
        onCancel={() => { setFileModel(false); }}>
        {
          fileList.map((i, n) => {
            return (
              <p>{n + 1}. {i}</p>
            )
          })
        }
      </Modal>
      {/* 查看文件弹出框 */}

      {/* 确定删除审核文件提示框-start */}
      <Modal
        title="审核文件"
        open={isRemoveFileModalOpen}
        okText={'确定'}
        cancelText={'取消'}
        onOk={() => {
          setIsRemoveFileModalOpen(false);
          fileRemove(isRemoveFileName)
        }}
        width={620}
        onCancel={() => { setIsRemoveFileModalOpen(false); }}>
        <p>此操作会删除当前文件夹中所有文件,请谨慎操作!</p>
      </Modal>
      {/* 确定删除审核文件提示框-end */}
    </div >
  );
}

export default App;
