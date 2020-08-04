<template>
  <div v-if="Object.keys(commentInfo).length!=0" class="detail-comment-info">
    <div class="info-title">
      <span class="one">
        用户评论
      </span>
      <span class="two">
        更多
      </span>
    </div>
    <div class="info-user">
      <span class="icon">
        <img :src="commentInfo.user.avatar">
      </span>
      <span class="username">
        {{commentInfo.user.uname}}
      </span>
    </div>
    <div class="info-content">
      <p>{{commentInfo.content}}</p>
    </div>
    <div class="info-detail">
      <span>{{commentInfo.created|showDate}}</span>
      <span>{{commentInfo.style}}</span>
    </div>
    <div v-if="commentInfo.images&&commentInfo.images.length!=0" class="info-image">
      <img :src="item" v-for="item in commentInfo.images">
    </div>
  </div>
</template>

<script>
  import { formatDate } from 'common/utils.js'
  export default {
    name: 'DetailCommentInfo',
    components: {},
    data() {
      return {
      }
    },
    computed: {},
    methods: {},
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(date) {
        const time = new Date(date * 1000);
        return formatDate(time, 'yyyy-MM-dd');
      }
    }
  }
</script>
<style scoped>
  .detail-comment-info {
    margin: 0 10px;

  }

  .info-title {
    position: relative;
    height: 50px;
    border-bottom: 2px solid #eee;
  }

  .one {
    position: absolute;
    top: 15px;
    left: 0;
  }

  .two {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .info-user {
    margin: 10px 10px;
  }

  .icon img {
    width: 35px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 5px;
  }

  .info-content {
    color: #666666;
  }

  .info-image img {
    width: 50px;
  }

  .info-detail {
    margin: 20px 0;
    color: #a1a1a1 !important;
  }
</style>