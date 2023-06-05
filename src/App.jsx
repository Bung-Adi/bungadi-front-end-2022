import ReactDOM from "react-dom"
import React, {useState ,useEffect} from "react"
import { ApolloProvider } from "@apollo/client/react";
import client from "./lib/apollo";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Preload from './component/Preload'

import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Portpolio from './pages/Portpolio'

import PortoPost from "./pages/PortoPost"

import Layout from "./component/Layout"

export default function App() {

  let [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },500)
  },[])

    return (
      <ApolloProvider client={client}>
        {loading ?
        <Preload loading={loading} />
        :
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="portpolio" element={<Portpolio />} />
              <Route path="about" element={<About />} />
              <Route path="blog" element={<Blog />} />
              <Route path="portopost" element={<PortoPost />} />
              <Route path="/portopost/:slug" element={<PortoPost />} />
            </Route>
          </Routes>
        </BrowserRouter>
        }
      </ApolloProvider>
    )
  }