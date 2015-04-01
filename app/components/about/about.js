import React from 'react'

import './about.styl'

export default class About extends React.Component {
    render() {
        return (
            <article className="ns-aboutAurora">
                <p>React, and its various ecosystems, are varied and diverse, so suggesting that there is any One True Ecosystem is misleading. Indeed, one of the many benefits of React is its modular approach, allowing a wide variety of libraries and development tools to be used alongside it, fitting the needs of each particular project. However, with such a wide variety of options, and with things changing so fast, it can be overwhelming (and time-consuming) for new-comers to React to get a sense of, let alone build, a complete & cohesive ecosystem on which to build their next project. React Ecosystem Aurora aims to be one such ecosystem, using a selection of (some of) the best libraries and workflow tools currently on offer.</p>
                <p>A note on the name: Aurora = A, I fully expect in time for there to be a B, C...</p>
            </article>
        )
    }
}
