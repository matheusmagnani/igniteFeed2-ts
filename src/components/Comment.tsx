import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { formatDistanceToNowStrict} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { ThumbsUp, Trash } from "phosphor-react";

interface CommentProps {
  content: string ;
  onDeleteComment: (comment: string) => void;
  publishedAt: Date;
}


export function Comment({ content, onDeleteComment, publishedAt }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0)

  const publishedDateRelativeToNow = formatDistanceToNowStrict(publishedAt,
    {
      locale: ptBR,
    })


  function handleDeleteComment( ) {
    onDeleteComment(content)
  }

  function handleLikeCount( ) {
    setLikeCount(likeCount +1)
    
  }

  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/6643122?v=4"/>

        <div className={ styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Mayk Brito</strong>
                <time dateTime="2023-10-26 11:50:00">{publishedDateRelativeToNow}</time>
              </div>
              <button onClick={handleDeleteComment} className={styles.trash} title="Deletar comentário">
                <Trash size={24}/>
              </button>
            </header>
            <p>{content}</p>

          </div>
          <footer>
            <button onClick={handleLikeCount}>
              <ThumbsUp/>
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
    </div>
  )
}