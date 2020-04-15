import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { youtubeApiToken } from '../config/environments/env'

class YouTubeService {
  private api: AxiosInstance
  private params = {
    key: youtubeApiToken,
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
    return (await this.get('/search')).data
  }
}

export default new YouTubeService()
