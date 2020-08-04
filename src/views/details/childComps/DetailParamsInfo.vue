<template>
  <div class="detail-params-info" v-if="Object.keys(itemParams).length!=0">
    <div class="params-table">
      <div class="table1">
        <table>
          <tr v-for="item in itemParams.rule.tables[0]">
            <td v-for="item1 in item">
              {{item1}}
            </td>
          </tr>
        </table>
      </div>
      <div class="table2">
        <table>
          <tr v-for="item in itemParams.info.set">
            <td>{{item.key}}</td>
            <td>{{item.value}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailParamsInfo',
    components: {},
    data() {
      return {
      }
    },
    computed: {},
    methods: {},
    props: {
      itemParams: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>
<style scoped>
  .table1 table {
    width: 100%;
    border-top: 5px solid #eee;
    border-bottom: 5px solid #eee;
    border-collapse: collapse;
  }

  .table1 table td {
    padding: 13px;
    border-bottom: 1px solid #eee;
  }

  .table2 table {
    width: 100%;
    border-bottom: 5px solid #eee;
    border-collapse: collapse;
  }

  .table2 table td {
    width: 20px;
    padding: 13px;
    border-bottom: 1px solid #eee;
  }

  .table2 table td:nth-child(2) {
    color: var(--color-tint);
  }
</style>