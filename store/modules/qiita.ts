import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

import { PostLists } from '@/models/QiitaPost'
import { fetchQiitaUserData } from '@/services/fetchQiitaData'


@Module({ name: 'qiita', namespaced: true })
export class Qiita extends VuexModule {
  public QiitaLists: PostLists[] = []


  get qiitaLists(): PostLists[] {
    return this.QiitaLists
  }
  
  @Mutation
  private SET_QIITA_LIST(posts: PostLists[]): void {
    this.QiitaLists = posts
  }


  /**
   * Qiita
   */
  @Action
  public async getQiitaUserData({
    type,
    user
  }: {
    type: string
    user: string
  }): Promise<void> {
    const { data } = await fetchQiitaUserData({headers: {
      Authorization: `Bearer ${process.env.Qiita}`
    }})
    this.SET_QIITA_LIST(data)
  }
}
