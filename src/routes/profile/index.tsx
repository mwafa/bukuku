import { FunctionalComponent, h } from "preact"
import Notfound from "../notfound"
import style from "./style.css"

interface Props {
  matches: {
    id?: string
    full?: string
  }
}

const Profile: FunctionalComponent<Props> = ({ matches }: Props) => {
  console.log(matches)
  const { id, full } = matches
  if (id && full)
    return (
      <div className={style.profile}>
        <iframe
          src={`https://drive.google.com/file/d/${id}/preview`}
          width="100%"
          height="100%"
        ></iframe>
      </div>
    )
  return <Notfound />
}

export default Profile
