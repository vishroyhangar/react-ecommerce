import React from 'react';
import '../../Components/PreviewCollection/PreviewCollection.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const PreviewCollection = ({ title, items }) => {
  return (
    <div className='preview-collection'>
      <h1 className='title'>{title.toUpperCase()}</h1>

      <div className="preview">
        {
          items.filter((item, idx) => idx < 4)
          .map(({id, ...other}) => {
            return(
              <CollectionItem key={id}  {...other}/>
            )
          })
        }
      </div>
    </div>
  )
}


export default PreviewCollection;