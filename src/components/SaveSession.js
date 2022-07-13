import React from 'react'

const SaveSession = (itemName, object) => {
    localStorage.setItem(`${itemName}`, JSON.stringify(object))
}

export default SaveSession