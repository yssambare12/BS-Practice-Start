import { Button, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Home.css";
import More from "./More";
function Home() {
  const [list, setList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    fetchData();
  }, [pageNo]);
  const fetchData = async () => {
    var res = await fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json"
    );
    var data = await res.json();
    let pages = [];
    var from = (pageNo - 1) * 4;
    var to = from + 4;
    for (let i = from; i < to; i++) {
      if (data[i]) {
        pages.push(data[i]);
      }
    }
    console.log(pages);
    setList(pages);
  };
  return (
    <div className="maincontainer">
      <div id="nav">
        <Button colorScheme="twitter" className="LogoBtn">
          V Music
        </Button>
        <Input
          variant="outline"
          placeholder="Outline"
          style={{ border: "1px solid #BB9981" }}
        />
      </div>
      <hr style={{ marginTop: "1%" }} />
      <div className="cont">
        <div className="sidebar">
          <h1>Library</h1>
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Search</h1>
          <h1>My Play List</h1>
          <h1>Electronic</h1>
          <h1>DJ</h1>
          <h1>HipHop</h1>
          <div className="btnsDiv">
            <Button
              colorScheme="blue"
              className="pagebtn"
              onClick={() => setPageNo(pageNo - 1)}
              disabled={pageNo === 1}
            >
              <img
                className="leftarrows"
                src="https://img.icons8.com/ios-filled/50/ffffff/chevron-left.png"
                alt="left"
              />
            </Button>
            <Button colorScheme="blue" className="pagebtnInd">
              {pageNo}
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => setPageNo(pageNo + 1)}
              disabled={pageNo === 3}
            >
              <img
                className="rightarrows"
                src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/ffffff/external-right-arrow-arrows-kmg-design-glyph-kmg-design.png"
                alt="right"
              />
            </Button>
          </div>
        </div>
        <div className="playList">
          {list.map((e) => (
            <More
              song={e.song}
              url={e.url}
              artists={e.artists}
              cover_image={e.cover_image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
