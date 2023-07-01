const shortener = async (url) => {
    const regex = new RegExp(
        "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|"
        + "((\\d{1,3}\\.){3}\\d{1,3}))"
        + "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*"
        + "(\\?[;&a-z\\d%_.~+=-]*)?"
        + "(\\#[-a-z\\d_]*)?$",
        "i"
    );
    if (!regex.test(url)) {
        throw new Error("Invalid URL format, please check your URL");
    }

    const res = await fetch("https://urlserver.vercel.app/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ full_url: url }),
    });
    const data = await res.json();
    if (data.statusCode === 201) {
        return data.data.redirectUrl;
    } else {
        throw new Error(data.message);
    }
};
module.exports = shortener;
