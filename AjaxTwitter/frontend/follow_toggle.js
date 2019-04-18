const APIUtil = require("./api_util.js");

class FollowToggle {
    constructor(el){
        this.$el = $(el);

        this.user_id = this.$el.attr('data-id');
        this.followState = this.$el.attr('data-follow-state');
        
        this.render();
        this.$el.on("click", this.handleClick.bind(this))
    }

    render() {

        if (this.followState === "false") {
            this.$el.html("Follow!");
        } else if (this.followState === "Pending") {
            this.$el.html("Pending")
            console.log("Try to pend");
        } else {
            this.$el.html("Unfollow!");

        }
    }
    handleClick(e){
            e.preventDefault();
            this.$el.prop("disabled", true);
            let requestMethod = "";
            if (this.followState === "false") {
                this.followState = "Pending";
                this.render();
                APIUtil.followUser(this.user_id).
                then(this.followState = "true").then(this.$el.prop("disabled", false));
                    (this.render());
            } else {
                this.followState = "Pending";
                this.render();
                APIUtil.unfollowUser(this.user_id).
                    then(this.followState = "false").then(this.$el.prop("disabled", false));
                (this.render());
            }
    };
}
module.exports = FollowToggle;