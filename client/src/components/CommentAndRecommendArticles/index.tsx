import React from "react";
import { NextPage } from "next";
import cls from "classnames";
import { MyComment } from "@/components/Comment";
import { RecommendArticles } from "@components/RecommendArticles";
import style from "./index.module.scss";

interface IProps {
  articleId?: string;
  pageId?: string;
  isCommentable?: boolean;
}

export const CommentAndRecommendArticles: NextPage<IProps> = ({
  articleId,
  pageId,
  isCommentable
}) => {
  return (
    <div className={cls(style.wrapper)}>
      {/* S 评论 */}
      {isCommentable && (
        <div className={style.comments}>
          <p className={style.title}>评论</p>
          <div className={style.commentContainer}>
            <MyComment articleId={articleId || pageId} />
          </div>
        </div>
      )}
      {/* E 评论 */}

      {/* S 推荐阅读 */}
      <div className={style.recmmendArticles}>
        <p className={style.title}>推荐阅读</p>
        <div className={style.articleContainer}>
          <RecommendArticles
            articleId={articleId}
            needTitle={false}
            asCard={false}
          />
        </div>
      </div>
      {/* E 推荐阅读 */}
    </div>
  );
};
