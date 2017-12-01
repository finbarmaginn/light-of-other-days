import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import ScrollUp from '../components/ScrollUp'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import {
  notifyUpdateReady,
  nowOffline,
  nowOnline
} from '../actions/index'
import {connect} from 'react-redux'
import UpdateNotify from "../components/UpdateNotify";

@connect((store) => {
  return {
    updateReady: store.sw.updateReady,
    online: store.sw.online
  }
})


class App extends React.Component {
  componentDidMount() {
    OfflinePluginRuntime.install({

      onUpdating: () => {
        console.log('SW Event:', 'onUpdating');
      },
      onUpdateReady: () => {
        console.log('SW Event:', 'onUpdateReady');
        OfflinePluginRuntime.applyUpdate();
      },
      onUpdated: () => {
        console.log('SW Event:', 'onUpdated');
        this.props.dispatch(notifyUpdateReady())
      },
      onUpdateFailed: () => {
        console.log('SW Event:', 'onUpdateFailed');
      }
    })

    window.addEventListener('online', () => {
      return this.props.dispatch(nowOnline())
    })

    window.addEventListener('offline', () => {
      return this.props.dispatch(nowOffline())
    })
  }

  updateNotify() {
    let {dispatch, updateReady} = this.props
    if (updateReady) {
      return (
        <UpdateNotify
          dispatch={dispatch}
        />
      )
    }
  }

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
        <ScrollUp showUnder={150}/>
        {this.updateNotify()}
      </div>
    )
  }
}

export default App
