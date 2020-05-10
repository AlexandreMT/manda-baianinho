import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { YT_API_TOKEN } from '../config/environments/env'

class YouTubeService {
  private api: AxiosInstance
  private params = {
    key: YT_API_TOKEN,
    maxResults: 50,
    part: 'snippet',
    channelId: 'UCyTqiBJSKWYNSMVcbm__OVw'
  }
  
  constructor() {
    this.api = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3'
    })
  }

  private get(path: string, params = this.params): Promise<AxiosResponse> {
    return this.api.get(path, { params })
  }

  public async getChannelVideos(): Promise<any> {
    const videos =  (await this.get('/search')).data.items
    const selectedVideo = videos[Math.floor(Math.random() * videos.length)]

    return selectedVideo
  }
}

export default new YouTubeService()
