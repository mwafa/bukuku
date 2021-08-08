import { FunctionalComponent, h } from "preact"
import { Link } from "preact-router"
import { useState } from "preact/hooks"
import style from "./style.css"

const Home: FunctionalComponent = () => {
  const [preview, setPreview] = useState("")
  const [full, setFull] = useState("")
  const reg = /drive\.google\.com\/file\/d\/([^\/]+)/gm

  const id = reg.exec(preview)
  const output = id ? encodeURIComponent(id[1]) : ""
  const urlOutput = `${
    window.location
  }preview?id=${output}&full=${encodeURIComponent(full)}`

  return (
    <div class={style.home}>
      <h1>URL GENERATOR</h1>
      <input
        type="text"
        placeholder="LINK Preview"
        value={preview}
        onInput={(e) => setPreview((e.target as HTMLInputElement)?.value)}
      />
      <input
        type="text"
        placeholder="LINK full version"
        value={full}
        onInput={(e) => setFull((e.target as HTMLInputElement)?.value)}
      />
      <p>Hasil Link ada di bawah ini</p>
      {full && output && (
        <div>
          <h2>Link</h2>
          <input type="text" value={urlOutput} />
          <Link href={urlOutput}>Link ke Preview</Link>
        </div>
      )}
    </div>
  )
}

export default Home
