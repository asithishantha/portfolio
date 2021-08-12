import React, { Component } from 'react';
import Terminal from 'react-bash';

export const intro = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history
                .concat({ value: ">_ Hi, I'm Asith Ishantha Madurawala" })
                .concat({ value: '>_ September 11, 1995m, Colombo, Sri Lanka' })
                .concat({ value: '>_ Grew up in Ja Ela, Sri Lanka.' })
                .concat({
                    value: '>_ Now, Undegraduate student of Future University Hakodate,Japan., Full Stack Developer.',
                })
                .concat({ value: '>_ Future, I want to be a System Engineer' })
                .concat({ value: '>' }),
        };
    },
};

export const edu = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history
                .concat({ value: '>_ Bachelor(Hons.)  Information System(Reading)' })
                .concat({
                    value: '>_ Information Architecture, Future University, Hakodate (Japan)',
                })
                .concat({ value: '>_ Grade point average : 3.59' })
                .concat({ value: '>_' })
                .concat({ value: '>_ Higher Diploma in Software Engineering' })
                .concat({ value: '>_ Lanka Nippon Biztech Institute,Maharagama, Sri Lanka' })
                .concat({ value: '>' })
                .concat({ value: '>_  Diploma in Software Engineering' })
                .concat({ value: '>_ SLIIT, Sri Lanka' })
                .concat({ value: '>' }),
        };
    },
};

export const lang = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history
                .concat({ value: ">_Sinhala : 4/5 => Native" })
                .concat({
                    value: '>_ ENGLISH : 3/5 => Intermediate.',
                })
                .concat({
                    value: '>_ JAPANESE : 3/5 => JLPT N2 knowledge, reading Bachelor degree in Japanese language',
                })
                .concat({ value: '>' }),
        };
    },
};



export const pskill = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history
                .concat({
                    value: '>_ Now, Expertise about .Net C#, Python, Matlab, Java, C, Wordpress, HTML CSS JS',
                })
                .concat({ value: '>_ ' })
                .concat({ value: '>_ Backend  => 9/10' })
                .concat({ value: '>_ Frontend => 9/10' })
                .concat({ value: '>_ Windows Server => 6/10' })
                .concat({ value: '>_ Linux Server => 6/10' })
                .concat({ value: '>_ ' })
                .concat({ value: '>_ PROGRAMMING LANGUAGE' })
                .concat({ value: '>_ Advanced => HTML CSS JS,Python' })
                .concat({ value: '>_ Intermediate => Java, C++, PHP, C#, Node JS,Matlab,Java' })
                .concat({ value: '>_ Beginner => Node Js' })
                .concat({ value: '>_ ' })
                .concat({ value: '>_ WEB STACK & TOOLS' })
                .concat({
                    value: '>_ WordPress, MySql, MongoDB, MicrosoftSQL, Firebase, Git, Docker',
                })
                .concat({ value: '>_ ' })
                .concat({ value: '>_ INTERESTED NOW' })
                .concat({
                    value: '>_ UX/UI,Machine Learning,Image Processing, Cloud Technology, Politics.',
                })
                .concat({ value: '>' }),
        };
    },
};

export const sskill = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history
                .concat({
                    value: '>_ Photographer => Admin of japan interest group',
                })
                .concat({
                    value: '>_ Blogger => bokettoshinaide.blogspot.com (About technology or programming)',
                })
                .concat({ value: '>_ Sports => Chess, Cricket' })
                .concat({ value: '>_ Games => COD' })
                .concat({ value: '>' }),
        };
    },
};

export const awards = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history.concat({ value: '>_ ???' }).concat({ value: '>' }),
        };
    },
};

export const exp = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history
                .concat({ value: '>_ 2020 - Now : Outsource' })
                .concat({
                    value: '>_ 2020 - 2021 : Software Engineer Intern, Hsenid Outsourcing Co.,Ltd.',
                })
                .concat({
                    value: '>_ 2019 - Sri Lanka Representative, Sakura Science Organization,Japan.',
                })
                .concat({ value: '>' }),
        };
    },
};

export const contact = {
    exec: ({ structure, history, cwd }, command) => {
        return {
            structure,
            cwd,
            history: history
                .concat({ value: '>_ Email : asithish075@gmail.com' })
                .concat({ value: '>_ Twitter : @AsithIshantha' })
                .concat({ value: '>_ Instagram : asithishantha' })
                .concat({ value: '>_ Github : https://github.com/asithishantha' })
                .concat({ value: '>' }),
        };
    },
};

class terminal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const extensions = {
            intro,
            edu,
            lang,
            stskill,
            pskill,
            sskill,
            awards,
            exp,
            contact,
        };
        const history = [{ value: 'Welcome to my profile!' }].concat({
            value: 'Please type the command',
        });
        return ( <
            Terminal prefix = { 'portfolio' }
            theme = { Terminal.Themes.DARK }
            history = { history }
            extensions = { extensions }
            />
        );
    }
}

export default terminal;