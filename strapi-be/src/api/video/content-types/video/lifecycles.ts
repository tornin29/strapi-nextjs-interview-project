const { getVideoDurationInSeconds } = require("get-video-duration");

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;

    if (data.video) {
      try {
        const file = await strapi.entityService.findOne(
          "plugin::upload.file",
          data.video,
          {
            fields: ["url"],
          }
        );

        const durationInSeconds = await getVideoDurationInSeconds(
          process.env.BASE_URL + file.url
        );

        data.duration = Math.trunc(durationInSeconds);
        if (!data.publishDate) data.publishDate = new Date();
      } catch (error) {
        console.log("Error getting video duration: ", error);
      }
    }
  },
  async beforeUpdate(event) {
    const { data } = event.params;
    if (data.video) {
      try {
        const file = await strapi.entityService.findOne(
          "plugin::upload.file",
          data.video,
          {
            fields: ["url"],
          }
        );
        const durationInSeconds = await getVideoDurationInSeconds(
          process.env.BASE_URL + file.url
        );

        data.duration = durationInSeconds;
      } catch (error) {
        console.log("Error getting video duration: ", error);
      }
    }
  },
};
