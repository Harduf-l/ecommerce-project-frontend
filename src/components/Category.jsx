let Category = ({info}) => {
let {mypictures, infotext, links} = info
let pictureCategoryStyle = {height: "40vh", objectFit: "cover", margin: "8px"}
let infoStyle = {color: "white", backgroundColor: "rgba(143,147,151, 0.6)", width: "100px", position: "absolute", left: "200px", zIndex: "9999", display:"none"}
let outerLinkstyle = { marginBottom: "30px", position: "relative"}

    return (
        <div style={{textAlign: "center", paddingTop: "30px"}}>
        <a href={links[0]} style={outerLinkstyle}  ><img className="col-lg-3 col-md-5 col-10" style={pictureCategoryStyle} alt={infotext[0]} src={mypictures[0]}/></a>
        <p style={infoStyle}>{infotext[0]}</p>
        <a href={links[1]} style={outerLinkstyle}  ><img className="col-lg-3 col-md-5 col-10" style={pictureCategoryStyle} alt={infotext[1]} src={mypictures[1]}/></a>
        <p style={infoStyle}>{infotext[1]}</p>
        <a href={links[2]} style={outerLinkstyle}><img className="col-lg-3 col-md-5 col-10" style={pictureCategoryStyle} alt={infotext[2]} src={mypictures[2]}/></a>
        <p style={infoStyle}>{infotext[2]}</p>
        <a href={links[3]} style={outerLinkstyle} ><img className="col-lg-3 col-md-5 col-10" style={pictureCategoryStyle} alt={infotext[3]} src={mypictures[3]}/></a>
        <p style={infoStyle}>{infotext[3]}</p>
        <a href={links[4]} style={outerLinkstyle} ><img className="col-lg-3 col-md-5 col-10" style={pictureCategoryStyle} alt={infotext[4]} src={mypictures[4]}/></a>
        <p style={infoStyle}>{infotext[4]}</p>
        <a href={links[5]} style={outerLinkstyle}  ><img className="col-lg-3 col-md-5 col-10" style={pictureCategoryStyle} alt={infotext[5]} src={mypictures[5]}/></a>
        <p style={infoStyle}>{infotext[5]}</p>
        </div>
)


}

export default Category; 