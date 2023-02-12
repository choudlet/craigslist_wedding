import React from "react"
import PageContainer from "../components/pageContainer"
import IframeMap from "../components/iframeMap"
import LinkText from "../components/linkText"
import { StaticImage } from "gatsby-plugin-image"

const Reccomendations = () => {
  return (
    <PageContainer>
      <h3 style={{ fontFamily: "Times New Roman" }}>Reccomendations</h3>
      <h3 style={{ fontFamily: "Times New Roman" }}>Portland Hotels</h3>
      <StaticImage src="../images/oldport.png" alt="oldport" height={200} />
      <p style={{ fontFamily: "Times New Roman" }}>
        We don't have a block of rooms reserved at any hotels, but here are some
        options:
      </p>
      <ReccomendationBlock
        link="https://thefrancismaine.com/"
        linkText="The Francis Hotel"
        bodyText="Located in the charming Parkside neighborhood, The Francis Hotel & Spa offers 15 uniquely designed guest rooms and a small spa in a beautifully renovated historic mansion. The Francis is locally owned & operated by fourth-generation Mainers and has been a part of the Portland community since 2017."
        mapLink="https://www.openstreetmap.org/export/embed.html?bbox=-70.28140783309938%2C43.65032974984957%2C-70.26724576950075%2C43.65678823430195&amp;layer=mapnik&amp;marker=43.653555197596816%2C-70.27432680130005"
      />
      <ReccomendationBlock
        link="https://www.theregency.com/"
        linkText="The Regency Hotel"
        bodyText="An Elegant & Cozy Historical Gem in the Old Port District of Portland, Maine"
        mapLink="https://www.openstreetmap.org/export/embed.html?bbox=-70.25485396385194%2C43.656198305413184%2C-70.25131344795228%2C43.65792344299441&amp;layer=mapnik&amp;marker=43.65706088039917%2C-70.2530837059021"
      />
      <ReccomendationBlock
        link="https://www.marriott.com/en-us/hotels/pwmac-ac-hotel-portland-downtown-waterfront-me/overview/"
        linkText="AC Hotel"
        bodyText="Thoughtfully designed for creative spirits, our waterfront hotel in Portland, ME resides on Fore Street, on the site of The Grand Trunk Station – the only Portland hotel with unobstructed views of Casco Bay. "
        mapLink="https://www.openstreetmap.org/export/embed.html?bbox=-70.24977922439577%2C43.65943896165959%2C-70.24623870849611%2C43.661164006135444&amp;layer=mapnik&amp;marker=43.66030080002082%2C-70.24800909999999"
      />
      <ReccomendationBlock
        link="https://www.airbnb.com/s/Portland--ME/homes?adults=2&place_id=ChIJLe6wqnKcskwRKfpyM7W2nX4&refinement_paths%5B%5D=%2Fhomes&checkin=2023-09-27&checkout=2023-09-29"
        linkText="AirBnb - Portland"
        bodyText="There are plenty of AirBnbs in Portland, but we recommend staying in the Old Port or Parkside neighborhoods."
      />

      <h3 style={{ fontFamily: "Times New Roman" }}>Coffee & Bakeries</h3>
      <StaticImage src="../images/coffee.jpg" alt="oldport" height={200} />
      <ReccomendationBlock
        link="https://standardbakingco.com/"
        linkText="Standard Baking Co."
        bodyText="Handmade pastries, breads, and more"
        mapLink="https://www.openstreetmap.org/export/embed.html?bbox=-70.25262236595155%2C43.6570948397908%2C-70.2490818500519%2C43.65881995161475&amp;layer=mapnik&amp;marker=43.65795660002082%2C-70.25085279999996"
      />
      <ReccomendationBlock
        link="https://www.tandemcoffee.com/"
        linkText="Tandem Coffee"
        bodyText="Very popular coffee shop with congress street location and a roastery in bayside"
      />
      <ReccomendationBlock
        link="https://www.smallsisgood.com/"
        linkText="Smalls"
        bodyText="Delcious coffee and breakfast along with a very cool selection of gits in the West End"
      />
      <ReccomendationBlock
        link="http://ohnocafe.com/"
        linkText="Ohno Cafe"
        bodyText="Small neighborhood cafe with delicious coffee and breakfast in the West End"
        mapLink="https://www.openstreetmap.org/export/embed.html?bbox=-70.26542723178865%2C43.648478241300154%2C-70.2622300386429%2C43.65028123096175&amp;layer=mapnik&amp;marker=43.649379600040106%2C-70.26382849999999"
      />
      <h3 style={{ fontFamily: "Times New Roman" }}>Restaurants</h3>
      <StaticImage src="../images/vibes.jpg" alt="oldport" height={200} />
      <ReccomendationBlock
        link="http://hotsuppa.com/menus"
        linkText="Hot Suppa"
        bodyText="Hearty Souther fare right on Congress Street"
        mapLink="https://www.openstreetmap.org/export/embed.html?bbox=-70.27033030986787%2C43.65220837104629%2C-70.26713311672212%2C43.65401124873308&amp;layer=mapnik&amp;marker=43.65310981665511%2C-70.26873171329498"
      />
      <ReccomendationBlock
        link="https://www.waysidetavernmaine.com/"
        linkText="Wayside Tavern"
        bodyText="We are a neighborhood restaurant & bar next to the Francis Hotel. Settle into a cozy corner to relish good food and renew your spirits."
      />
      <ReccomendationBlock
        link="https://leewardmaine.com/"
        linkText="Leeward"
        bodyText="Delicious pasta on free street"
        mapLink="https://www.openstreetmap.org/export/embed.html?bbox=-70.26169627904893%2C43.65477973557866%2C-70.25849908590318%2C43.65658253607122&amp;layer=mapnik&amp;marker=43.65568030002083%2C-70.26009750000003"
      />
      <h3 style={{ fontFamily: "Times New Roman" }}>Bars and Breweries</h3>
      <StaticImage src="../images/friends.jpg" alt="oldport" height={200} />
      <ReccomendationBlock
        link="https://www.friendsandfamilymaine.com/"
        linkText="Friends and Family"
        bodyText="Delicious wine bar and shop on Congress St."
      />
      <ReccomendationBlock
        link="https://www.facebook.com/people/Ruskis-Tavern/100057643591615/"
        linkText="Ruskis Tavern"
        bodyText="Classic Portland dive bar with eats"
      />
      <ReccomendationBlock
        link="https://apresmaine.com/"
        linkText="Après"
        bodyText="Craft Seltzer and Cider in East Bayside"
        mapLink="https://www.openstreetmap.org/export/embed.html?bbox=-70.25764077901842%2C43.666624056394404%2C-70.25444358587266%2C43.668426501264875&amp;layer=mapnik&amp;marker=43.66752610002083%2C-70.2560416"
      />

      <p style={{ fontFamily: "Times New Roman" }}>
        Please let us know if you have any questions!
      </p>
    </PageContainer>
  )
}

const ReccomendationBlock = ({
  link,
  linkText,
  bodyText,
  mapLink,
}: {
  link: string
  linkText: string
  bodyText: string
  mapLink?: string
}) => {
  return (
    <div style={{ marginTop: 8 }}>
      <a style={{ padding: 0 }} target="_blank" href={link}>
        <LinkText text={linkText} />
      </a>
      <p style={{ fontFamily: "Times New Roman" }}>{bodyText}</p>
      {mapLink && <IframeMap src={mapLink} />}
    </div>
  )
}

export default Reccomendations
