class GitHub {
    constructor() {
        this.client_id = '832265923cecf8913cc9';
        this.secret = 'e3525e0ecc8f9ef2d89330eec686e2a3db3e1eb6';
        this.repos_count = 5;
        this.repo_sort = 'create: asc'
    }

    async getUser(user) {

        //fetch from user api
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.secret}`)

        if (!profileResponse.ok) {
            console.log(new Error(`Something is wrong ${profileResponse.status}`));
        }

        const profile = await profileResponse.json();

        //fetch from repo api
        const repoReponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.secret}`)


        const repo = await repoReponse.json();

        return {
            profile,
            repo
        }
    }



}