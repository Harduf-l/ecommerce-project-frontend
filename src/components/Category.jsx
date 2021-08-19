let Category = ({info}) => {
let {mypictures, infotext, links} = info
let pictureCategoryStyle = {height: "40vh", objectFit: "cover", margin: "8px"}
let infoStyle = {color: "white", backgroundColor: "rgba(143,147,151, 0.6)", position: "absolute", display: "none"}
let outerLinkstyle = { marginBottom: "30px", position: "relative"}

    return (
        <div style={{textAlign: "center", paddingTop: "30px"}}>
        <a href={links[0]} style={outerLinkstyle}  ><p style={infoStyle}>{infotext[0]}</p><img className="col-lg-3 col-md-5 col-10" style={pictureCategoryStyle} alt={infotext[0]} src={mypictures[0]}/></a>
        <a href={links[1]} style={outerLinkstyle}  ><p style={infoStyle}>{infotext[1]}</p><img className="col-lg-3 col-md-5 col-10" style={pictureCategoryStyle} alt={infotext[1]} src={mypictures[1]}/></a>
        <a href={links[2]} style={outerLinkstyle}><p style={infoStyle}>{infotext[2]}</p><img className="col-lg-3 col-md-5 col-10" style={pictureCategoryStyle} alt={infotext[2]} src={mypictures[2]}/></a>
        <a href={links[3]} style={outerLinkstyle} ><p style={infoStyle}>{infotext[3]}</p><img className="col-lg-3 col-md-5 col-10" style={pictureCategoryStyle} alt={infotext[3]} src={mypictures[3]}/></a>
        <a href={links[4]} style={outerLinkstyle} ><p style={infoStyle}>{infotext[4]}</p><img className="col-lg-3 col-md-5 col-10" style={pictureCategoryStyle} alt={infotext[4]} src={mypictures[4]}/></a>
        <a href={links[5]} style={outerLinkstyle}  ><p style={infoStyle}>{infotext[5]}</p><img className="col-lg-3 col-md-5 col-10" style={pictureCategoryStyle} alt={infotext[5]} src={mypictures[5]}/></a>
        </div>
)


}

export default Category; 