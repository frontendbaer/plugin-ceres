Vue.filter("itemURL", function(item)
{
    const enableOldUrlPattern = App.config.global.enableOldUrlPattern;
    const urlPath = item.texts.urlPath || "";

    let link = "";

    if (urlPath.charAt(0) !== "/")
    {
        link = "/";
    }

    if (urlPath && urlPath.length)
    {
        link += urlPath;
    }

    let suffix = "";

    if (enableOldUrlPattern)
    {
        suffix = "/a-" + item.item.id;
    }
    else
    {
        suffix = "_" + item.item.id + "_" + item.variation.id;
    }

    let trailingSlash = "";

    if (App.urlTrailingSlash)
    {
        trailingSlash = "/";
    }

    if (link.substr(link.length - suffix.length, suffix.length) === suffix)
    {
        return link + trailingSlash;
    }

    return link + suffix + trailingSlash;
});
