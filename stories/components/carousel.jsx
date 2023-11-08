import React, {useState} from "$veda-ui/react";
import { Figure } from '$veda-ui-scripts/components/common/blocks/figure';
import { Embed } from '$veda-ui-scripts/components/common/blocks/embed';

export default function Carousel({
    contentArray
}){

    if (!contentArray) return;

    const [index,setIndex] = useState(0);

    const handleSetIndex = (newIndex) => {

        // wrap around to the end
        if (newIndex < 0) newIndex = contentArray.length - 1;

        // wrap around to the beginning
        newIndex = newIndex % contentArray.length;

        return setIndex(newIndex);
    }


    return <div style={{display:'flex',width:'100%',justifyContent:'space-around'}}>
    <div style={{display:'flex',width:'60%'}}>
        <button
            onClick={()=>handleSetIndex(index-1)}
            style={{display:'inline-flex',flex:'1 1 10%'}}
        >
            previous
        </button>

        <div style={{
            display:'inline-flex',
            width:'100%',
            flexDirection:'column'}}>
            {contentArray[index].title}
            <div style={{display:'flex',justifyContent:'center'}}>
                <iframe
                    style={{
                        width:'560',
                        height:'315'}}
                    src={contentArray[index].src}
                />
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                {contentArray[index].caption}
            </div>
            <Thumbnails {...{contentArray,index,setIndex:handleSetIndex}} />
        </div>

        <button
            onClick={()=>handleSetIndex(index+1)}
            style={{display:'inline-flex',flex:'1 1 10%'}}
        >
            next
        </button>
    </div>
    </div>
}

function Thumbnails({contentArray,index,setIndex}){

    // determine which content we want to display in the thumbnails below
    let subArray = contentArray.slice(index,index+4)

    // handle when the thumbnails should wrap back around to the beginning
    if ( contentArray.length >= 4 && subArray.length < 4 ){
        subArray = [...subArray, ...contentArray.slice(0,4-subArray.length)];
    }

    return <>

        {/*/ create the actual thumbnail divs that set the index on click /*/}
        <div
        style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
        }}
        >

        {subArray.map((content,mapIndex) => {
            const key = `carousel-${content.src.slice(content.src.length-6)}`
            const parts = content.src.split('/');
            const thumbnailURL= `http://img.youtube.com/vi/${parts[parts.length-1]}/maxresdefault.jpg`

            return <img
                key={key}
                onClick={()=>{setIndex(index+mapIndex)}}
                src={thumbnailURL}
                style={{
                    display:'inline-flex',
                    width:'20%'}}
                />
            })
        }
        </div>
    </>

}