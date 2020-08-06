'use strict'
const User = use('App/Models/User');
const Article = use('App/Models/Article');

class ArticleController {
  /**
   * @swagger
   * /v1/articles:
   *   post:
   *     tags:
   *     - Article
   *     summary: 게시글 작성
   *     security:
   *       - Bearer: []
   *     consumes:
   *     - "application/x-www-form-urlencoded"
   *     parameters:
   *     - name: "category"
   *       in: "formData"
   *       description: "카테고리 "
   *       required: true
   *       type: "string"
   *     - name: "content"
   *       in: "formData"
   *       description: "내용"
   *       required: true
   *       type: "string"
   *     - name: "parent_id"
   *       in: "formData"
   *       description: "부모 글 아이디"
   *       required: false
   *       type: "int"
   *     responses:
   *       '200':
   *         description: "OK"
   */
  async create({ request, response, auth }) {


  }
}

module.exports = ArticleController
