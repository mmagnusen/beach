const renderPlural = (numberOfItems, descriptor, plural = null) => {
    if (!numberOfItems) return '';
    return numberOfItems > 1 ? (plural ? `${numberOfItems} ${plural}` : `${numberOfItems} ${descriptor}s`) : `${numberOfItems} ${descriptor}`;
}

export default renderPlural;
