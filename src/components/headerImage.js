// import React, { Fragment } from 'react'
// import { graphql, StaticQuery } from 'gatsby'
// import Img from 'gatsby-image'
// import PropTypes from 'prop-types'

// const HeaderImage = ({ children }) => {
// return (
//     <StaticQuery
//         query={query} render={data} =>(
//             <Fragment>
//                 <Img fluid={data.bgImage.childImageSharp.fluid} />
//             </Fragment>
//         )}
//         />
//     )
// }
// HeaderImage.propTypes = {
//   children: PropTypes.node.isRequired
// };

// const query = graphql`
//   query {
//     bgImage: file(relativePath: { eq: "images/grass.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           base64
//           tracedSVG
//           aspectRatio
//           src
//           srcSet
//           srcWebp
//           srcSetWebp
//           sizes
//           originalImg
//           originalName
//         }
//       }
//     }
//   }
// `

// export default HeaderImage;
