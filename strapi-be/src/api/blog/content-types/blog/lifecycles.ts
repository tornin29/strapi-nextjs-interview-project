const calculateReadTime = (text) => {
    const wordsPerMinute = 180;
    const textLength = text.split(/\s+/).length;

    if(textLength > 0) {
        const value = Math.ceil(textLength / wordsPerMinute);
        return value;
    }

    return 0;
}

module.exports = {
    beforeCreate(event) {
        const { data }  = event.params;
        if(data.body) {
            data.readTime = calculateReadTime(data.body)
        }
        data.publishDate = new Date()
    },
    beforeUpdate(event) {
        const { data }  = event.params;
        if(data.body) {
            data.readTime = calculateReadTime(data.body)
        }
    },
}