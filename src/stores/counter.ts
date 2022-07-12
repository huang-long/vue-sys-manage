import { defineStore } from 'pinia';

interface Tag {
  path: string,
  name: string,
  title: string,
}

export const userStore = defineStore({
  id: 'counter',
  state: () => {
    let tagsList: Array<Tag> = [];
    return {
      tagsList: tagsList,
      meunIsCollapsed: false,
      loginUser: '',
    }
  },
  getters: {
    getMeunIsCollapsed: (state) => state.meunIsCollapsed,
    getTagsList: (state) => state.tagsList
  },
  actions: {
    setLoginUser(value: string) {
      this.loginUser = value;
    },
    setMeunIsCollapsed(value: boolean) {
      this.meunIsCollapsed = value;
    },
    delTagsItem(index: number) {
      this.tagsList.splice(index, 1);
    },
    setTagsItem(tag: Tag) {
      this.tagsList.push(tag)
    },
    clearAllTags() {
      this.tagsList = []
    },
    closeTagsOther(tagsList: Array<Tag>) {
      this.tagsList = tagsList;
    },
  }
})
