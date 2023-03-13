import {useEffect, useContext} from "react"
import { useParams } from "react-router-dom"
import GithubContext from "../context/github/githubContext"


function User() {
    const {getUser, user} = useContext(GithubContext)

    const params = useParams() as any

    useEffect(() => {
        getUser(params.login)
    }, [])
  return (
    <div>{params.login}</div>
  )
}
export default User