
<script lang="ts">
import { ref, computed, watch } from "vue";
import { userStore } from "../stores/counter";
import { useRoute, useRouter } from "vue-router";
import { menuList } from "../data/menuList";

export default {
  setup() {
    const menu = menuList;
    const route = useRoute();
    const router = useRouter();
    // 获取store
    const store = userStore();
    let isCollapsed = computed(() => store.getMeunIsCollapsed);
    let sideMenu = ref();
    let fullPath = computed(() => route.fullPath);

    const menuitemClasses = computed(() => {
      return [
        'menu-item',
        isCollapsed.value ? 'collapsed-menu' : ''
      ]
    })
    const goPage = (path: string) => {
      router.push(path);
    }

    watch(isCollapsed, () => {
      if (sideMenu) {
        sideMenu.value.toggleCollapse();
      }
    });

    return {
      isCollapsed,
      menuitemClasses,
      sideMenu,
      goPage,
      menu,
      fullPath
    };
  },
};
</script>

<template>
  <Sider ref="sideMenu" hide-trigger collapsible :collapsed-width="200" v-model="isCollapsed" class="sider">

    <Menu :theme="menuTheme" width="auto" :class="menuitemClasses" accordion>
      <template v-for="item in menu">
        <!-- 展开并且有二级子菜单 -->
        <Submenu v-if="!isCollapsed && item.children && item.children.length" :key="'1_' + item.id" :name="item.id">
          <template #title>
            <Icon :type="item.icon" />
            <span>{{ item.title }}</span>
          </template>

          <!-- 展开二级子菜单 -->
          <template v-for="item2 in item.children">

            <!-- 展开并且有三级子菜单 -->
            <Submenu v-if="item2.children && item2.children.length" :key="item2.id" :name="item2.id">
              <template #title>
                <span>{{ item2.title }}</span>
              </template>
              <MenuItem v-for="(item3, index3) in item2.children" :key="index3" :name="item2.path" :to="item3.path">
              {{ item3.title }}
              </MenuItem>
            </Submenu>

            <!-- 无三级子菜单 -->
            <MenuItem v-else :key="item2.id" :name="item2.path" :to="item2.path">
            {{ item2.title }}
            </MenuItem>
          </template>
        </Submenu>

        <!-- 展开但没有子菜单 -->
        <MenuItem v-else-if="!isCollapsed" :name="item.id" :to="item.path" :key="'2_'+ item.id">
        <Icon :type="item.icon" />
        <span>{{ item.title }}</span>
        </MenuItem>

        <!-- 不展开有二级子菜单 -->
        <Dropdown v-else-if="isCollapsed && item.children && item.children.length" :key="'3_'+ item.id"
          placement="right-start">
          <MenuItem :name="item.id" :to="item.path">
          <Icon :type="item.icon" />
          <span>{{ item.title }}</span>
          </MenuItem>
          <template #list>
            <DropdownMenu>

              <!-- 展开二级子菜单 -->
              <template v-for="item2 in item.children">

                <!-- 展开并且有三级子菜单 -->
                <Dropdown v-if="item2.children && item2.children.length" :key="item2.id" placement="right-start">
                  <DropdownItem>
                    <div class="ivu-menu-item">
                      {{item2.title}}
                      <Icon type="ios-arrow-forward"></Icon>
                    </div>
                  </DropdownItem>
                  <template #list>
                    <DropdownMenu>
                      <DropdownItem v-for="(item3, index3) in item2.children" :key="index3">
                        <MenuItem :name="item3.id" :to="item3.path">{{ item3.title }}</MenuItem>
                      </DropdownItem>
                    </DropdownMenu>
                  </template>
                </Dropdown>

                <!-- 无三级子菜单 -->
                <DropdownItem v-else :key="item2.id">
                  <MenuItem :name="item2.id" :to="item2.path">{{ item2.title }}</MenuItem>
                </DropdownItem>
              </template>
            </DropdownMenu>
          </template>
        </Dropdown>

        <!-- 不展开无子菜单 -->
        <Tooltip v-else-if="isCollapsed" :content="item.title" placement="right" :key="'4_'+ item.id">
          <MenuItem :name="item.path" :to="item.path">
          <Icon :type="item.icon" />
          <span>{{ item.title }}</span>
          </MenuItem>
        </Tooltip>
      </template>
    </Menu>

  </Sider>
</template>

<style lang="less" scoped>
.sider {
  background-color: #fff;
}

.menu-item {
  height: 100%;

  span {
    display: inline-block;
    overflow: hidden;
    // width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }
  i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
}

.collapsed-menu {
  /deep/.ivu-menu-submenu-title {
    .ivu-menu-submenu-title-icon {
      display: none;
    }
  }
  span {
    width: 0px;
    transition: width 0.2s ease;
  }
  i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 22px;
  }

  /deep/.ivu-select-dropdown {
    margin: 0 0 0 5px;
  }

  /deep/.ivu-dropdown-item {
    padding: 0;
  }
}
</style>