<template>
  <div>
    <a-table
      v-bind="$attrs"
      v-on="$listeners"
      :pagination="false"
      :locale="locale"
    >
<!--  这里绑定的插槽有$slots 和 $scopedSlots-->
<!--  vue里面有$options,route,可通过打印查看-->
<!--  这里的row是对于插槽的值,但是回传需要一个key值,目前无法知道如何不需要key也能返回-->
      <template
        v-for="(vue, slot) in $scopedSlots"
        :slot="slot"
        slot-scope="row">
        <slot :name="slot" :record="row"></slot>
      </template>
    </a-table>

    <v-row class="mr-24">
      <v-col class="flex-center">
        <span class="amount">{{$t('homePage.tableTotal')}}: {{total}}</span>
      </v-col>
      <v-row class="mr-24">
        <v-col class="flex-center flexEnd">
          <span class="everyPageShow">{{$t('homePage.tablePage')}}</span>
          <div class="showNumberBox">
            <v-select
              v-model="showPages"
              :items="showNumber"
              :label="showNumber[0]"
              single-line
            ></v-select>
          </div>
          <v-pagination
            v-model="pageIndex"
            :length="pageCount"
            :total-visible="5"
            style="padding-left: 20px"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
  export default {
    inheritAttrs: true,
    name: 'AppTable',
    // bind多值写法
    // v-bind="{...$attrs, ...$props, ...{dataSource: body, columns: header}}"
    data() {
      return {
        pageIndex: 1, // 当前第几页
        showPages: 10, // 每页多少
        showNumber: ['10', '30', '50', '100'] // 每页显示数量
      }
    },
    created() {
    },
    props: {
      total: {
        // type: [Object, Boolean, Function] 好像是定义2种类型的方式???
        type: Number,
        default: 0
      }
    },
    computed: {
      locale: {
        get() {
          return {
            emptyText: `${this.$t('homePage.emptyText')}`
          }
        }
      },
      pageCount() {
        return Math.ceil(this.total / this.showPages)
      }
    },
    watch: {
      showPages() {
        this.$emit('change')
        this.pageIndex = 1
      },
      pageIndex() {
        this.$emit('change')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mr-24 {
    margin-left: 0px;
    margin-right: 0px;
  }

  .v-pagination {
    width: auto;
  }

  .flex-center {
    display: flex;
    align-items: center;
  }

  .amount {
    font-size: 12px;
    line-height: 12px;
    color: #555;
  }

  .flexEnd {
    justify-content: flex-end;
    padding-right: 0px;
  }

  .everyPageShow {
    font-size: 12px;
    letter-spacing: 0.38px;
    line-height: 12px;
    color: #757575;
    padding-right: 20px;
  }

  .showNumberBox {
    display: inline-block;
    width: 40px;
  }

  /deep/ .v-select__slot {
    max-width: none;
    width: auto;
  }

  /deep/ .v-select__selection--comma {
    overflow: visible;
  }

  .pagination ul>li:last-child .v-pagination__navigation{
    margin-right: 0px;
  }
</style>
