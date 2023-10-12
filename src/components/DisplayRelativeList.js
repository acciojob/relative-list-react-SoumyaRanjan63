import React from 'react';

const DisplayRelativeList = () => {
    const relativeList=[
        'abc',
        'gadg',
        'fgfgr',
        'fgfe'
    ]
    return (
        <div>
            <h1>Diwali visiting list</h1>
            <ol id='relativeList'>
                {
                    relativeList.map((relative,index)=>(
                        <li key={`relativeListItem${index+1}`}>
                            {relative}
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}

export default DisplayRelativeList;
