let Category = ({info}) => {
let {mypictures, infotext, links} = info
let pictureCategoryStyle = {width: "350px", height: "220px", objectFit: "cover", margin: "8px"}
let infoStyle = {color: "white", backgroundColor: "rgba(143,147,151, 0.6)", position: "absolute", fontSize: "30px", marginLeft: "70px", marginTop: "100px"}

    return (
        <div className="container flex-wrap d-flex justify-content-around mt-4">
        <a href={links[0]}><p style={infoStyle}>{infotext[0]}</p><img style={pictureCategoryStyle} alt={infotext[0]} src={mypictures[0]}/></a>
        <a href={links[1]}><p style={infoStyle}>{infotext[1]}</p><img style={pictureCategoryStyle} alt={infotext[1]} src={mypictures[1]}/></a>
        <a href={links[2]}><p style={infoStyle}>{infotext[2]}</p><img style={pictureCategoryStyle} alt={infotext[2]} src={mypictures[2]}/></a>
        <a href={links[3]}><p style={infoStyle}>{infotext[3]}</p><img style={pictureCategoryStyle} alt={infotext[3]} src={mypictures[3]}/></a>
        <a href={links[4]}><p style={infoStyle}>{infotext[4]}</p><img style={pictureCategoryStyle} alt={infotext[4]} src={mypictures[4]}/></a>
        <a href={links[5]}><p style={infoStyle}>{infotext[5]}</p><img style={pictureCategoryStyle} alt={infotext[5]} src={mypictures[5]}/></a>
        </div>
)


}

export default Category; 