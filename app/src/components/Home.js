import React from 'react'
import FacebookProvider, {Like} from 'react-facebook'
import ImageSlider from "./Slider";


class Home extends React.Component {
  render() {
    const disable = (e) => {
      e.preventDefault()
      return false
    }

    return (
      <section className="wrap">
        <ImageSlider/>
        <article id="content">
          <p>‘The Light of Other Days’ is Jim Maginn's personal photographic archive of Irish Traditional Musicians, it
            is a touring exhibition and book. The following text is taken from the book:</p>
          <p><b>In the mid 1970s</b> I began exploring the world through photography. I was keen to make it relate to my
            other great passion, Irish traditional music. Through the following few years, I regularly photographed
            people and performances at sessions and concerts, working in an enthusiastic way.</p>
          <div
            className="ratio fiveFour"
          >
            <img
              onDragStart={disable.bind(this)}
              onContextMenu={disable.bind(this)}
              src={require("./../imgs/finalImages/Medium/Keenan Tommy - Medium.jpg")}
              alt="TommyKeenan"
            />
            <div className="imageCap">
              <p>Tommy Keenan</p>
            </div>
          </div>
          <p>My time as a student on the Documentary Photography course in Newport, Wales in the mid 80s would add
            structure to the idea.</p>
          <div
            className="ratio fiveFour"
          >
            <img
              onDragStart={disable.bind(this)}
              onContextMenu={disable.bind(this)}
              src={require("./../imgs/finalImages/Medium/McGoldrick Hugh - Medium.jpg")}
              alt="Hugh McGoldrick"
            />
            <div className="imageCap">
              <p>Hugh McGoldrick</p>
            </div>
          </div>
          <p>Three of my ‘stories’ dealt with music: the musician portraits; a series on The Boys of the Lough; and
            another on Ewan MacColl and Peggy Seeger. (I had the privilege of documenting this legendary pair and their
            family recording an album to raise funds for the anti-apartheid movement.) These three bodies of work were
            effectively this project in nascent form.</p>
          <div
            className="ratio thirtyFiveMmLand"
          >
            <img
              onDragStart={disable.bind(this)}
              onContextMenu={disable.bind(this)}
              src={require("./../imgs/finalImages/Medium/Gunn Brendan and Tommy - Medium.jpg")}
              alt="Brendan Gunn and Tommy ..."
            />
            <div className="imageCap">
              <p>Brendan Gunn and Tommy Gunn</p>
            </div>
          </div>
          <p>During 1985/87 I travelled frequently from Wales back home to Lurgan, from where I would strike out to find
            my musical heroes. It was at this time that Dara Vallely, Tony McAuley and David Hammond introduced me to
            some of the sitters.</p>
          <div
            className="ratio thirtyFiveMmLand"
            style={
              {
                "paddingBottom": "calc(67% + 39px)",
              }
            }
          >
            <img
              onDragStart={disable.bind(this)}
              onContextMenu={disable.bind(this)}
              src={require("../imgs/finalImages/Medium/Gillespie Sheila 1 - Medium.jpg")}
              alt="Sheila Gillespie"
            />
            <div className="imageCap">
              <p>Sheila Gillespie</p>
            </div>
          </div>

          <p>When I returned to live in Belfast in 1988, Ciaran Carson, the Traditional Arts Officer at the Arts Council
            of NI, commissioned several projects. The portraits of Archie McKeegan, Tommy Keenan, Peter Welsh, Josie
            McDermott, The McGoldricks and Paddy Harpur among others came out of that period. The documentary portrait
            and ‘decisive moment’ approach was, and remains, at the heart of my practice. The best portraits arrive
            naturally when a relationship of trust exists.</p>
          <div
            className="ratio thirtyFiveMmPort"
          >
            <img
              onDragStart={disable.bind(this)}
              onContextMenu={disable.bind(this)}
              src={require("./../imgs/finalImages/Medium/Hanna Geordie - Medium.jpg")}
              alt="Geordie Hanna"
            />
            <div className="imageCap">
              <p>Geordie Hanna</p>
            </div>

          </div>
          <p>I like to think of my practice as being in this humanist tradition. My photographic exemplars were Robert
            Frank, Gary Winogrand, Lee Friedlander and Henri Cartier-Bresson. Their work is a continuing and
            compassionate engagement with people, and it remains an inspiration to me. It has provided a framework for
            my work and the way I relate to the people I photograph.</p>
          <div
            className="ratio thirtyFiveMmLand"
          >
            <img
              onDragStart={disable.bind(this)}
              onContextMenu={disable.bind(this)}
              src={require("./../imgs/finalImages/Medium/MacColl Ewan - Medium.jpg")}
              alt="Ewan MacColl"
            />
            <div className="imageCap">
              <p>Ewan MacColl</p>
            </div>

          </div>
          <p>If my admiration and appreciation of these musicians – some of whom have suffered much hardship – all of
            whom have given great joy - is conveyed in these pages, then I am more than content.</p>
          <div
            className="ratio thirtyFiveMmLand"
          >
            <img
              onDragStart={disable.bind(this)}
              onContextMenu={disable.bind(this)}
              src={require("./../imgs/finalImages/Medium/Murray Sam - Medium.jpg")}
              alt="Sam Murray"
            />
            <div className="imageCap">
              <p>Sam Murray</p>
            </div>
          </div>
          <p>Revisiting some of those I’ve photographed over the last twenty five years, has given me an added impetus.
            This is one of those passionately engaging, once in a lifetime projects that I intend to pursue for as long
            as I can still make pictures.</p>

          <p>
            <cite>Jim Maginn, August 2012</cite>
          </p>
          <div
            className="ratio fiveFour"
          >
            <img
              onDragStart={disable.bind(this)}
              onContextMenu={disable.bind(this)}
              src={require("./../imgs/finalImages/Medium/Barry Maggie - Medium.jpg")}
              alt="Margaret Barry"
            />
            <div className="imageCap">
              <p>Margaret Barry</p>
            </div>

          </div>
          <h2 style={{marginTop: "20px"}}>
            The Exhibiton
          </h2>
          <p>
            The Light of Other Days, exhibition, ran from 5th Oct to 28th Nov 2012 In the Red
            Barn Gallery, Belfast. The Exhibition was subsequently shown at the Void Gallery
            Derry, The Gallery of Photography Dublin, The Irish festival in Oulu (Finland) and in conjunction
            with the 2017 Belfast Traditional Music Summer School.</p>
          <p>The project continues, some of the portraits on this site have been made since the
            book was published. New work will be added intermittently. &#39;Like&#39; on Facebook and
            you will be kept up to date with news of any substantial changes.</p>
          <h2>
            Reviews & Links
          </h2>
          <p>Exhibition / book reviews:</p>
          <ul>
            <li>
              <a
                href="http://www.bbc.co.uk/blogs/stuartbailie/2012/10/its_life_jim_1.shtml"
                target="_blank"
                rel="noopener">BBC's Stuart Bailie</a>
            </li>
            <li>
              <a
                href="http://www.newsletter.co.uk/lifestyle/weekend/arts/the-light-of-other-days-1-4388889"
                target="_blank"
                rel="noopener">The News Letter</a>
            </li>
            <li>
              <a href="http://www.culturenorthernireland.org/reviews/visual-arts/light-other-days"
                 target="_blank"
                 rel="noopener">Culture Northern Ireland</a>
            </li>
            <li>
              <a href="https://vimeo.com/62335067"
                 target="_blank"
                 rel="noopener">Northern Visions Short</a>
            </li>
          </ul>

          <FacebookProvider appID="1382639915131583">
            <Like href="http://www.facebook.com/TheLightOfOtherDays/" layout="button_count" showFaces share/>
          </FacebookProvider>
        </article>
      </section>
    )
  }
}

export default Home