import React from 'react'

const Layout = ({children, title, cols, id}) => {
    return (
        <section className="max-w-screen-xl px-8 mx-auto mb-12 lg:mb-20 lg:px-0" id={id}>
            <h2 className="text-3xl font-semibold lg:text-4xl">{title}</h2>
            <div className={`grid ${cols} gap-3 mt-6`}>
                {children}
            </div>
        </section>
    )
}

export default Layout