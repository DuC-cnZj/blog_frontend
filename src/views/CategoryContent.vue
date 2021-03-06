<template>
  <div class="page_content">
    <div class="container">
      <div class="row row-lg-eq-height">
        <div class="col-lg-9 offset-lg-1">
          <div class="post_content" v-if="chunkCategories.length > 0">

              <template v-for="(c, index) in chunkCategories">

                <!-- Similar Posts -->
                <div class="similar_posts card-deck" v-if="categories !== undefined" :key="index">
                  <template v-for="i in c">
                    <category-card :title="i.name" :path="'da'" :key="i.id" />
                  </template>
                </div>
              </template>
              <hr>
            </div>

            <div class="post_content" v-else>
                <loading />
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import CategoryCard from '@c/CategoryCard'
import Loading from '@c/Loading'
import { mapActions, mapState } from 'vuex'
import _ from 'lodash'

export default {
  components: { CategoryCard, Loading },
  mounted () {
    this.fetchCategories()
  },

  computed: {
    ...mapState(['categories']),
    chunkCategories () {
      return _.chunk(this.categories, 4)
    }
  },

  methods: {
    ...mapActions({ fetchCategories: 'getCategories' })
  }
}
</script>

<style lang="scss" scoped>
.similar_posts {
  margin-top: 15px;
}
/*********************************
6. Post Content
*********************************/

.page_content {
  background: #f7f7f7;
}
.category {
  margin-top: 80px;
}

/*********************************
6.1 Post Panel
*********************************/

.post_panel {
  height: 108px;
  z-index: 10;
  margin-top: 40px;
}
.author_image {
}
.author_image div {
  width: 58px;
  height: 58px;
  border: solid 5px #ffffff;
  border-radius: 50%;
  overflow: hidden;
}
.author_image div img {
  max-width: 100%;
}
.post_panel .post_meta {
  font-family: "Ubuntu", sans-serif;
  color: rgba(0, 0, 0, 0.25);
  font-size: 14px;
  font-weight: 500;
  margin-left: 20px;
  margin-top: 0;
}
.post_panel .post_meta a,
.post_panel .post_meta span {
  display: inline-block;
  position: relative;
  font-family: "Ubuntu", sans-serif;
  color: rgba(0, 0, 0, 0.25);
  font-size: 14px;
  font-weight: 500;
}
.post_panel .post_meta span {
  margin-left: 10px;
  padding-left: 5px;
}
.post_panel .post_meta span::before {
  display: block;
  position: absolute;
  top: 1px;
  left: -4px;
  content: "•";
}
.post_share span {
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.2);
  letter-spacing: 0.075em;
  font-weight: 700;
  margin-right: 28px;
}
.post_share_list {
  display: inline-block;
}
.post_share_item {
  display: inline-block;
}
.post_share_item:not(:last-child) {
  margin-right: 15px;
}
.post_share_item a i {
  font-size: 14px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.fa-facebook {
  color: #3b5999;
}
.fa-twitter {
  color: #55acee;
}
.fa-google {
  color: #dd4b39;
}
.post_share_item:hover a i {
  color: rgba(0, 0, 0, 0.2);
}

/*********************************
6.2 Post Body
*********************************/

.post_body {
  padding-left: 69px;
  padding-top: 59px;
  padding-right: 100px;
  padding-bottom: 45px;
  background: #ffffff;
  border-radius: 6px;
}
.post_p {
  font-size: 16px;
  line-height: 1.875;
  color: rgba(0, 0, 0, 0.8);
}
.post_body figure {
  width: 100%;
  margin-top: 40px;
  margin-bottom: 43px;
}
.post_body figure img {
  max-width: 100%;
}
.post_body figcaption {
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.3);
  text-align: center;
  margin-top: 8px;
}
.post_quote {
  padding-top: 58px;
  padding-bottom: 58px;
  padding-left: 30px;
  padding-right: 30px;
}
.post_quote .post_p {
  font-weight: 600;
  font-size: 16px;
}
.post_quote_source {
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 21px;
}
.post_tags {
  margin-top: 40px;
}
.post_tag {
  display: inline-block;
  width: auto;
  height: 24px;
  border: solid 1px #d7d7d7;
  border-radius: 3px;
  background: transparent;
  margin-bottom: 5px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.post_tag:not(:last-child) {
  margin-right: 6px;
}
.post_tag a {
  display: block;
  line-height: 22px;
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
}
.post_tag:hover {
  background: #ededed;
  border-color: #ededed;
}
.bottom_panel {
  margin-top: 0;
}

/*********************************
6.3 Similar Posts
*********************************/

.similar_posts {
  margin-top: 15px;
}

/*********************************
6.4 Post Comment
*********************************/

.post_comment {
  margin-top: 70px;
}
.post_comment_title {
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
}
.post_comment_form_container {
  width: 100%;
  background: #ffffff;
  border-radius: 6px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 50px;
  padding-bottom: 40px;
  margin-top: 44px;
}
.comment_input {
  display: inline-block;
  width: calc(50% - 15px);
  height: 42px;
  border: none;
  outline: none;
  border-bottom: solid 1px #cccccc;
  background: transparent;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.comment_input:first-child {
  margin-right: 25px;
}
.comment_input:hover,
.comment_text:hover {
  border-color: rgba(0, 0, 0, 1);
}
.comment_text {
  width: 100%;
  height: 90px;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: solid 1px #cccccc;
  padding-top: 11px;
  margin-top: 23px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.comment_input::-webkit-input-placeholder,
.comment_text::-webkit-input-placeholder {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: rgba(0, 0, 0, 0.3);
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.comment_input:-moz-placeholder,
.comment_text:-moz-placeholder {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: rgba(0, 0, 0, 0.3);
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.comment_input::-moz-placeholder,
.comment_text::-moz-placeholder {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: rgba(0, 0, 0, 0.3);
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.comment_input:-ms-input-placeholder,
.comment_text:-ms-input-placeholder {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: rgba(0, 0, 0, 0.3);
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.comment_input::input-placeholder,
.comment_text::input-placeholder {
  color: rgba(0, 0, 0, 1);
}

.comment_input:hover::-webkit-input-placeholder,
.comment_text:hover::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 1);
}
.comment_input:hover:-moz-placeholder,
.comment_text:hover:-moz-placeholder {
  color: rgba(0, 0, 0, 1);
}
.comment_input:hover::-moz-placeholder,
.comment_text:hover::-moz-placeholder {
  color: rgba(0, 0, 0, 1);
}
.comment_input:hover:-ms-input-placeholder,
.comment_text:hover:-ms-input-placeholder {
  color: rgba(0, 0, 0, 1);
}
.comment_input:hover::input-placeholder,
.comment_text:hover::input-placeholder {
  color: rgba(0, 0, 0, 1);
}
.comment_button {
  width: 143px;
  height: 36px;
  background: rgba(45, 223, 128, 0.1);
  color: rgba(45, 223, 128, 1);
  border: none;
  outline: none;
  border-radius: 18px;
  cursor: pointer;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
  margin-top: 24px;
}
.comment_button:hover {
  background: rgba(45, 223, 128, 1);
  color: #ffffff;
}

/*********************************
6.5 Comments
*********************************/

.comments {
  margin-top: 70px;
}
.comments_title {
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
}
.comments_container {
  width: 100%;
  margin-top: 44px;
}
.comment_list > li {
  margin-bottom: 15px;
}
.comment {
  width: 100%;
  background: #ffffff;
  border-radius: 6px;
}
.comment_body {
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 30px;
  padding-right: 30px;
}
.comment_author_image {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  overflow: hidden;
}
.comment_body .post_meta {
  margin-top: 0;
  margin-left: 18px;
}
.reply_button {
  width: 76px;
  height: 28px;
  background: rgba(45, 223, 128, 0.1);
  color: rgba(45, 223, 128, 1);
  border: none;
  outline: none;
  border-radius: 18px;
  cursor: pointer;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.reply_button:hover {
  background: rgba(45, 223, 128, 1);
  color: #ffffff;
}
.comment_content {
  margin-top: 22px;
}
.comment ul li {
  border-top: solid 1px #e5e5e5;
}
</style>
