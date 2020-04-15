import React from "react";
import Header from "./components/Header";
import Item from "./components/Item";
import Cta from "./components/Cta";
import Footer from "./components/Footer"
import "./styles/App.css";

import grow from "./images/illustration-grow-together.svg";
import flow from "./images/illustration-flowing-conversation.svg";
import users from "./images/illustration-your-users.svg";

const Heading = {
    title: "Build The Community Your Fans Will Love",
    body:
        "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.",
};

const Items = [
    {
        title: "Grow Together",
        body:
            "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
        image: grow,
    },
    {
        title: "Flowing Conversations",
        body:
            "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in -time loading for a more natural flow.",
        image: flow,
    },
    {
        title: "Your Users",
        body:
            "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
        image: users,
    },
];

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header title={Heading.title} body={Heading.body} />
                <div className="body__items">
                    {Items.map((item) => (
                        <Item
                            title={item.title}
                            body={item.body}
                            image={item.image}
                        />
                    ))}
                </div>
                <div className="cta__box">
                    <Cta />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
