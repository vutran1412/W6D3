const APIUtil = {
    followUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            method: "POST",
            data: {
                $el: { id: `${id}` }
            },
            dataType: "JSON"
        })
    },

    unfollowUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            method: "DELETE",
            data: {
                $el: { id: `${id}` }
            },
            dataType: "JSON"
        })
    }
}

module.exports = APIUtil;