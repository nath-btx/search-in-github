import pkg from '@prisma/client';
const { PrismaClient } = pkg;


export default async function insertUser(data) {
    console.log("Insert User data : ")
    console.log(data);
    console.log("data id : " + data.id)
    if (data === undefined) {
        console.log("data is undefined")
        return "data is undefined"
    }
    else {
        const prisma = new PrismaClient()
        try {
            const user = await prisma.user.create({
                data: {
                    id:                     data.id,
                    login:                  data.login.toLowerCase(),
                    node_id:                data.node_id,
                    avatar_url:             data.avatar_url,
                    gravatar_url:           data.gravatar_url,
                    url:                    data.url,
                    html_url:               data.html_url,
                    followers_url:          data.followers_url,
                    following_url:          data.following_url,
                    gists_url:              data.gists_url,
                    starred_url:            data.starred_url,
                    subscriptions_url:      data.subscriptions_url,
                    organizations_url:      data.organizations_url,
                    repos_url:              data.repos_url,
                    events_url:             data.events_url,
                    received_events_url:    data.received_events_url,         
                    type:                   data.type,
                    site_admin:             data.site_admin,
                    name:                   data.name,
                    company:                data.company,
                    blog:                   data.blog,
                    location:               data.location,
                    email:                  data.email,
                    hireable:               data.hireable,
                    bio:                    data.bio,
                    twitter_username:       data.twitter_username,
                    public_repos:           data.public_repos,
                    public_gists:           data.public_gists,
                    followers:              data.followers,
                    following:              data.following,
                    created_at:             data.created_at,
                    updated_at:             data.updated_at,
                }
            })
        }
        catch(e){
            console.log(e)
        }
        console.log("User created")
        return "user created"
    }
        
}
