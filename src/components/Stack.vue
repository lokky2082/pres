<template>
    <div>
        <!-- define the svg icons used in the project -->
        <svg style="display:none;">

        <symbol id="html-icon" width="100" height="100" viewBox="0 0 26.458 26.458"><path d="M1.984 0h22.49l-2.453 24.027-8.792 2.431-9.609-2.431z" fill="#e44d26"/><path d="M13.23 0h11.244l-2.453 24.027-8.792 2.431z" fill="#f1652f"/><path d="M21.071 3.197H5.387l.466 10.312h11.233l-1.087 5.85-2.77 1.436-2.77-1.437-.62-2.514h-2.64l.724 3.591 5.306 2.781 5.306-2.78 1.45-9.697H8.932l-.181-3.95h11.957z" fill="#fff"/>
            <title>HTML</title>
        </symbol>

        <symbol id="css-icon" width="100" height="100" viewBox="0 0 26.458 26.458"><path d="M1.984 0h22.49l-2.453 24.027-8.792 2.431-9.609-2.431z" fill="#0070bf" fill-opacity=".941"/><path d="M13.23 0h11.244l-2.453 24.027-8.792 2.431z" fill="#28a9e0"/><path d="M5.82 3.216h15.348l-.265 3.457-6.346 3.82h5.817l-1.323 9.35-5.556 3.384-5.557-3.383-.793-4.498H9.79l.529 3.175 2.901 1.587 2.94-1.587.535-5.845H6.137l-.133-2.91 7.754-3.093H6.085z" fill="#fff"/>
            <title>CSS</title>
        </symbol>

        <symbol id="bootstrap-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 26.458 26.458"><g transform="matrix(1.54545 0 0 1.53173 -7.362 -423.08)"><rect width="17.12" height="17.274" x="4.764" y="276.211" rx="1.423" ry="1.413" fill="#582546"/><g style="line-height:1.25;-inkscape-font-specification:'Lato Heavy'"><path style="-inkscape-font-specification:'Lato Heavy'" d="M8.899 290.614v-11.533h4.205q1.185 0 2.016.222.832.221 1.358.625.525.404.76.982.244.577.244 1.29 0 .388-.11.752-.11.356-.345.673-.236.316-.604.578-.37.253-.887.443 1.13.277 1.671.902.542.618.542 1.591 0 .736-.283 1.37-.282.633-.832 1.108-.54.467-1.341.736-.8.261-1.828.261zm2.652-4.892v2.874h1.867q.525 0 .855-.135.337-.134.526-.348.188-.214.259-.483.07-.27.07-.546 0-.317-.086-.57-.079-.253-.283-.428-.196-.174-.525-.269-.33-.095-.832-.095zm0-1.789h1.38q.44 0 .793-.063.353-.063.596-.222.251-.158.377-.435.133-.277.133-.696 0-.412-.102-.681-.102-.277-.314-.444-.212-.166-.541-.237-.322-.071-.769-.071h-1.553z" fill="#fff" aria-label="B" font-weight="900" font-size="15.761" font-family="Lato" letter-spacing="0" word-spacing="0" stroke-width=".394"/></g></g>
            <title>Bootstrap</title>
        </symbol>

        <symbol id="sass-icon" width="100" height="100" viewBox="0 0 26.458 26.458"><path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;isolation:auto;mix-blend-mode:normal" d="M15.712 1.334c-3.53-.137-7.68 1.017-10.31 4.001l-.022.027C4.051 7.06 3.735 8.724 4.124 10.215c.388 1.491 2.026 2.78 3.206 3.965 1.69 1.253 1.745 1.603 2.622 2.367-3.268 1.111-5.69 2.95-5.916 4.783-.248 2 1.295 3.805 3.58 3.805 1.668 0 3.398-.487 4.67-1.358.635-.435 1.16-.974 1.467-1.62a2.822 2.822 0 0 0 .109-2.161c-.372-1.068-1.31-1.998-2.3-2.936l3.05-.783c.805-.17 1.15-1.316.345-1.145l-4.363.932c-1.003-.884-2.065-1.767-2.98-2.686-1.114-1.118-1.984-2.27-2.29-3.442-.304-1.167-.109-2.38 1.043-3.858 2.317-2.617 6.096-3.697 9.292-3.572 1.602.062 3.047.427 4.045.992.997.564 1.526 1.266 1.548 2.124.035 1.397-.429 2.235-1.141 2.836-.712.6-1.73.943-2.798 1.108-2.135.33-3.751.051-4.357-.06-.605-.11-.085.776.765 1.005.85.228 1.37.587 3.789.214 1.209-.187 2.456-.577 3.422-1.392.967-.814 1.598-2.069 1.556-3.742-.034-1.32-.914-2.398-2.152-3.099-1.24-.7-2.859-1.09-4.624-1.158zM10.26 17.379l.12.107c1.129 1.033 1.393 2.022 1.69 2.876.173.494.324.96.131 1.367-.193.407-.533.933-1.036 1.278-1.008.69-1.53.957-2.933.957-1.644 0-2.53-1.093-2.356-2.497.171-1.379.948-3.117 4.384-4.088z" color="#000" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible" fill="#cc669f" fill-opacity=".941"/>
            <title>SASS</title>
        </symbol>

        <symbol id="stylus-icon" width="100" height="100" viewBox="0 0 26.458 26.458"><g fill="#b3d107"><path d="M11.145 19.221c3.495-10.685-2.964-7.92-1.645-8.866 2.587-1.855 4.165 3.148 2.227 9.073-1.938 5.924-6.561 8.894-7.082 5.77-.264-1.587 3.005 4.71 6.5-5.977zM15.313 7.237c-3.495 10.685 2.499 6.985 1.18 7.93-2.587 1.856-3.7-2.212-1.762-8.136 1.938-5.925 6.561-8.895 7.082-5.771.265 1.587-3.005-4.709-6.5 5.977z"/></g>
            <title>Stylus</title>
        </symbol>
        
        <symbol id="jquery-icon" width="100" height="100" viewBox="0 0 26.458 26.458"><g fill="#34577f"><g fill-opacity=".941"><path d="M9.559 11.632c3.88 3.81 5.885-1.015 5.527-.134-.933 2.295-3.78 2.644-5.932.53-2.152-2.112-1.753-4.804.54-5.824.986-.438-4.017 1.616-.135 5.428z"/><path d="M6.9 14.196c6.017 5.908 9.124-1.573 8.57-.208-1.446 3.558-5.86 4.1-9.197.823-3.336-3.276-2.718-7.448.839-9.03 1.527-.68-6.228 2.506-.211 8.414z"/><path d="M3.64 17.165c7.764 7.623 11.774-2.03 11.058-.268-1.865 4.591-7.562 5.29-11.867 1.062-4.304-4.227-3.507-9.612 1.082-11.653 1.971-.876-8.036 3.234-.272 10.858z"/></g><g style="line-height:1.25"><path style="-inkscape-font-specification:'Yu Gothic Bold'" d="M25.175 8.659l-2.888 9.99q-.919 3.179-5.317 3.179-.17 0-.465-.026-.32-.027-.486-.035l.267-1.594q.322.06.649.06.98 0 1.533-.441.505-.408.758-1.283l2.848-9.85zM26.46 4.63l-.66 2.288h-3.345l.662-2.288z" font-weight="700" font-family="Yu Gothic" aria-label="j" font-size="6.083" letter-spacing="0" word-spacing="0" stroke-width=".152"/></g></g>
            <title>jQuery</title>
        </symbol>  

        <symbol id="js-icon" width="100" height="100" viewBox="0 0 26.458 26.458"><path d="M1.984 0h22.49l-2.453 24.027-8.792 2.431-9.609-2.431z" fill="#d6ba33"/><path d="M13.23 0h11.244l-2.453 24.027-8.792 2.431z" fill="#ffda3f"/><path d="M11.893 4.408v17.373l-6.602-1.769v-2.541l4.572 1.225V4.408zm10.179 0h-7.533l.224 11.856 4.232-.711-.296 2.845-4.057 1.067v2.51l5.653-2.155.593-7.468-4.262.712V8.462h5.15z" fill="#fff"/>
            <title>JavaScript</title>
        </symbol>
        
        <symbol id="svg-icon" width="100" height="100" viewBox="0 0 26.458 26.458"><g transform="matrix(4.1948 0 0 3.58826 -35.68 -1001.446)"><rect fill="#ff990f" ry="1.413" rx="1.423" y="276.211" x="4.764" height="17.274" width="17.12" transform="matrix(.36842 0 0 .42687 6.75 161.183)"/><g fill="#fff"><g transform="matrix(.22285 0 0 .2582 8.708 212.158)"><path d="M11.987 263.317h3.194v10.682h-3.194z" stroke-width="1.032" stroke="#000"/><ellipse stroke-width="1.032" stroke="#000" cx="13.584" cy="264.345" rx="2.681" ry="2.705"/><path d="M12.501 265.754h2.164v8.804h-2.164z"/></g><g transform="matrix(.15758 .18421 -.15618 .18258 52.377 230.228)"><path d="M11.987 263.317h3.194v10.682h-3.194z" stroke-width="1.032" stroke="#000"/><ellipse stroke-width="1.032" stroke="#000" ry="2.705" rx="2.681" cy="264.345" cx="13.584"/><path d="M12.501 265.754h2.164v8.804h-2.164z"/></g><g transform="matrix(0 .26052 -.22087 0 72.012 279.095)"><path d="M11.987 263.317h3.194v10.682h-3.194z" stroke-width="1.032" stroke="#000"/><ellipse stroke-width="1.032" stroke="#000" cx="13.584" cy="264.345" rx="2.681" ry="2.705"/><path d="M12.501 265.754h2.164v8.804h-2.164z"/></g><g transform="matrix(.15758 -.18421 .15618 .18258 -33.187 235.232)"><path d="M11.987 263.317h3.194v10.682h-3.194z" stroke-width="1.032" stroke="#000"/><ellipse stroke-width="1.032" stroke="#000" ry="2.705" rx="2.681" cy="264.345" cx="13.584"/><path d="M12.501 265.754h2.164v8.804h-2.164z"/></g><g transform="matrix(0 -.26052 .22087 0 -48.693 286.23)"><path d="M11.987 263.317h3.194v10.682h-3.194z" stroke-width="1.032" stroke="#000"/><ellipse stroke-width="1.032" stroke="#000" cx="13.584" cy="264.345" rx="2.681" ry="2.705"/><path d="M12.501 265.754h2.164v8.804h-2.164z"/></g><path d="M10.288 281.45l.924 1.08.792.128-1.375-1.607z"/><path d="M11.494 280.777v1.741l.503-.056-.02-1.685z"/><path d="M12.842 281.051l-1.377 1.61h.688l.488-.578z"/></g><rect width="5.75" height="3.533" x="8.784" y="282.71" rx=".647" ry=".518"/><path fill-opacity=".941" fill="#3f3f3f" d="M9.661 283.024h3.997c.321 0 .58.105.58.236v1.709c0 .13-.26-.018-.58-.042l-3.997-.293c-.32-.023-.58-.105-.58-.236v-1.138c0-.13.259-.236.58-.236z"/><g style="line-height:1.25" aria-label="SVG" font-weight="900" font-size="3.11" font-family="Lato" letter-spacing="0" word-spacing="0" stroke-width=".078" fill="#fff"><path style="-inkscape-font-specification:'Lato Heavy'" d="M10.43 283.626q-.018.047-.039.07-.02.024-.052.024-.028 0-.061-.027-.032-.03-.074-.065-.04-.035-.093-.063-.053-.03-.121-.03-.117 0-.175.081-.056.079-.056.214 0 .087.034.144.035.057.09.098.057.042.128.077.072.033.148.077.075.041.146.098.072.057.128.146.056.088.09.216.035.126.035.305 0 .198-.043.371t-.125.303q-.081.128-.202.202-.12.073-.272.073-.083 0-.17-.027-.087-.028-.168-.077-.081-.051-.153-.12-.07-.069-.124-.153l.123-.311q.014-.035.038-.057.025-.022.053-.022.037 0 .074.038l.085.082q.048.046.11.083.06.037.145.037.113 0 .175-.079.063-.08.063-.253 0-.1-.034-.163-.035-.063-.091-.104-.056-.042-.127-.073-.071-.032-.146-.069-.075-.04-.147-.094-.071-.057-.128-.148-.055-.092-.09-.228-.034-.137-.034-.338 0-.161.04-.315.041-.153.12-.273.079-.12.193-.19.115-.073.262-.073.083 0 .16.021.079.02.149.061.07.04.13.097.062.055.11.126zM10.62 283.044h.334q.054 0 .089.04.034.039.049.104l.347 1.533q.023.1.047.218t.045.248q.017-.13.04-.248t.045-.218l.344-1.533q.013-.055.048-.099.036-.045.088-.045h.337l-.719 2.864h-.376zM13.35 285.429q.086 0 .153-.024.066-.023.125-.063v-.434h-.177q-.04 0-.062-.034-.022-.033-.022-.084v-.366h.637v1.21q-.068.08-.143.139-.074.057-.16.094-.083.037-.179.055-.094.018-.204.018-.197 0-.364-.11-.167-.112-.29-.307-.122-.197-.192-.464-.069-.27-.069-.584 0-.32.067-.588.066-.27.189-.464.124-.194.299-.302.176-.109.392-.109.112 0 .21.03.099.03.181.08.084.052.153.122.069.071.123.154l-.12.293q-.018.041-.043.065-.023.023-.051.023-.037 0-.077-.04-.049-.046-.093-.08-.043-.035-.089-.057-.045-.021-.095-.031-.05-.01-.114-.01-.116 0-.21.066-.093.065-.16.185-.065.12-.1.29-.036.166-.036.373 0 .228.039.405.04.177.108.299.07.122.165.186.096.063.21.063z"/></g></g>
            <title>SVG</title>
        </symbol>
        
        <symbol id="d3-icon" width="100" height="100" viewBox="0 0 26.458 26.458"><g font-weight="400" font-size="10.583" letter-spacing="0" word-spacing="0" fill="#f99d43"><path style="line-height:1.25" d="M12.93 3.969a8.737 10.096 0 0 1 3.82 3.706h2.922c.255 0 .491.047.712.143.219.094.41.227.571.4a1.534 1.704 0 0 1 .533 1.304c0 .258-.046.504-.14.736a1.944 1.864 0 0 1-.394.595 1.776 1.703 0 0 1-.571.386 1.716 1.646 0 0 1-.711.143h-1.629a8.737 10.096 0 0 1 .153 1.846 8.737 10.096 0 0 1-.155 1.86h1.631a1.73 1.73 0 0 1 1.283.542 1.537 1.708 0 0 1 .533 1.306c0 .257-.046.498-.14.723a1.942 1.863 0 0 1-.394.593 1.81 1.81 0 0 1-.571.39 1.716 1.646 0 0 1-.711.14H16.75a8.737 10.096 0 0 1-3.834 3.707h6.758c.754 0 1.459-.147 2.121-.44a5.55 5.323 0 0 0 1.727-1.187 5.134 5.704 0 0 0 1.18-1.77 5.855 5.616 0 0 0 .433-2.157c0-.68-.123-1.338-.37-1.975a5.887 5.647 0 0 0-1.04-1.732 5.021 5.58 0 0 0 1.04-1.717 6.008 5.763 0 0 0 .37-1.989 5.856 5.617 0 0 0-1.613-3.913 5.45 5.227 0 0 0-1.728-1.202 4.993 4.79 0 0 0-2.12-.438z" font-family="sans-serif"/><path d="M1.323 3.969v3.749l3.67-.043h1.815a5.679 6.31 0 0 1 2.122.439 5.48 6.088 0 0 1 1.74 1.202c.499.499.888 1.084 1.167 1.755.288.672.432 1.391.432 2.158a5.51 5.51 0 0 1-.432 2.17 4.953 5.503 0 0 1-1.168 1.77 5.508 5.508 0 0 1-1.74 1.187 5.825 6.472 0 0 1-2.12.426H1.322v3.707h5.485c.84 0 1.644-.108 2.414-.323a9.756 10.84 0 0 0 2.183-.942 9.042 10.047 0 0 0 1.842-1.447 8.99 9.99 0 0 0 1.422-1.873 9.116 9.116 0 0 0 .914-2.208 7.472 8.302 0 0 0 .33-2.467c0-.853-.11-1.67-.33-2.454a7.594 8.438 0 0 0-.913-2.208 8.514 9.46 0 0 0-1.423-1.874 8.82 9.8 0 0 0-1.842-1.458 9.313 10.348 0 0 0-2.183-.93 9.495 10.55 0 0 0-2.414-.336z" style="-inkscape-font-specification:Righteous" font-family="Righteous"/></g>
            <title>D3.js</title>
        </symbol>
        
        <symbol id="react-icon" width="100" height="100" viewBox="0 0 26.458 26.458"><g transform="matrix(1.53154 0 0 1.54205 3.888 -426.02)"><ellipse ry="1.745" rx="1.729" cy="284.848" cx="6.099" fill="#61daff" fill-opacity=".941"/><g transform="translate(-7.051)" fill="none" stroke="#61dafb" stroke-width=".516"><ellipse cx="284.848" cy="-13.15" rx="2.869" ry="8.38" transform="rotate(90)"/><ellipse transform="matrix(-.86408 .50335 -.49666 -.86795 0 0)" ry="8.436" rx="2.85" cy="-252.759" cx="130.062"/><ellipse cx="-152.89" cy="-239.52" rx="2.85" ry="8.436" transform="matrix(-.86408 -.50335 .49666 -.86795 0 0)"/></g></g>
            <title>React.js</title>
        </symbol>
        
        <symbol id="git-icon" width="100" height="100" viewBox="0 0 26.458 26.458"><g transform="matrix(1.21432 0 0 1.20354 -3.479 -330.112)"><rect transform="scale(.99553 1.00445) rotate(-45)" ry=".65" rx=".65" y="202.669" x="-198.98" height="15.862" width="15.85" fill="#f05033"/><path fill="#fff" d="M12.762 280.573h2.162v9.335h-2.162z"/><ellipse ry="1.919" rx="1.902" cy="289.384" cx="13.843" fill="#fff"/><path fill="#fff" d="M9.78 277.84l1.528-1.541 8.56 8.636-1.528 1.542z"/><ellipse transform="scale(.99553 1.00445) rotate(-45)" cx="-187.56" cy="214.177" rx="1.911" ry="1.911" fill="#fff"/><ellipse cx="13.843" cy="280.573" rx="1.902" ry="1.919" fill="#fff"/></g>
            <title>git</title>
        </symbol>
        
        <symbol id="gulp-icon" width="100" height="100" viewBox="0 0 26.458 26.458"><g transform="matrix(.10673 0 0 .10878 3.145 -.62)"><ellipse fill="#da464f" ry="9.174" rx="57.452" cy="72.585" cx="90.714"/><path fill="#da464f" d="M115.475 39.528l14.873 1.865-9.112 34.168-14.873-1.866z"/><ellipse fill-opacity=".941" fill="#fff" ry="3.821" rx="11.717" cy="71.95" cx="116.039"/><ellipse fill="#da464f" cx="116.039" cy="71.396" rx="11.717" ry="3.356"/><path fill="#da464f" d="M143.954 5.691l12.503 6.868-28.479 33.837-12.503-6.868zM32.506 77.277s4.62 9.302 57.452 9.302c52.833 0 57.453-9.302 57.453-9.302l-10.054 106.395s.327 8.72-47.134 9.302c-47.461.581-47.134-9.302-47.134-9.302zm18.223 126.647h79.833l-4.86 39.902s-3.456 5.103-35.057 5.103c-31.6 0-35.057-5.103-35.057-5.103z"/><path fill="#da464f" d="M45.241 192s13.628 6.725 45.426 6.725c31.798 0 45.425-6.725 45.425-6.725l-5.53 11.924s-3.934 1.525-39.895 1.525c-35.961 0-39.896-1.525-39.896-1.525z"/><g style="line-height:1.25" aria-label="Gulp" font-weight="400" font-size="51.901" font-family="Lobster" letter-spacing="0" word-spacing="0" fill="#fff" stroke-width="1.298"><path style="-inkscape-font-specification:Lobster" d="M71.243 133.694l-3.802 17.435q-.836 3.878-2.002 6.69-1.165 2.84-2.711 4.69-1.52 1.85-3.472 2.736-1.952.887-4.36.887-1.9 0-3.446-.507-1.546-.507-2.66-1.444-1.09-.938-1.699-2.256-.608-1.292-.608-2.863 0-1.52.532-2.839.558-1.292 1.496-2.255.937-.989 2.204-1.546 1.293-.558 2.763-.558 2.002 0 3.193.963 1.216.963 1.216 2.61 0 1.217-.557 1.977-.482-.633-1.293-.988-.785-.355-1.672-.355-.786 0-1.445.254-.633.278-1.115.76-.456.507-.71 1.191-.253.684-.253 1.52 0 .811.254 1.496.253.71.684 1.19.456.508 1.064.786.634.28 1.369.28 1.799 0 3.091-1.623 1.293-1.596 2.002-4.764l2.585-11.48h-.202q-1.42 1.951-3.422 3.016-1.976 1.039-4.358 1.039-2.307 0-4.157-.913-1.85-.937-3.167-2.635-1.293-1.724-2.002-4.156-.71-2.433-.71-5.424 0-2.889.659-5.524.659-2.661 1.875-4.942 1.217-2.28 2.915-4.13 1.723-1.85 3.826-3.169 2.129-1.317 4.562-2.027 2.433-.71 5.119-.71 2.205 0 3.979.507 1.774.482 3.016 1.42 1.241.912 1.9 2.255.66 1.318.66 2.965 0 1.115-.305 2.027-.279.913-.811 1.572-.507.633-1.242.988t-1.596.355q-.963 0-1.825-.406-.862-.43-1.444-1.216.456-.304.861-.811.406-.532.71-1.166.304-.659.481-1.368.178-.71.178-1.42 0-1.57-.913-2.407-.887-.862-2.56-.862-1.545 0-3.04.735-1.496.71-2.839 1.977-1.317 1.267-2.458 3.041-1.14 1.749-1.977 3.827-.81 2.052-1.267 4.384-.456 2.306-.456 4.714 0 3.928 1.217 5.98 1.241 2.028 3.598 2.028 2.839 0 4.942-2.915 2.129-2.94 3.472-8.667zM101.299 146.086q-.735 2.104-1.597 3.65-.862 1.546-1.8 2.61-.912 1.064-1.875 1.723-.963.66-1.875 1.014-.912.355-1.749.481-.836.127-1.52.127-2.23 0-3.548-1.216-1.318-1.242-1.597-3.7-.988 1.596-2.002 2.56-1.013.962-2.002 1.494-.988.533-1.926.685-.937.177-1.748.177-1.166 0-2.18-.355-1.013-.354-1.774-1.115-.735-.76-1.165-1.926-.431-1.166-.431-2.813 0-.71.101-1.546.102-.861.304-1.85l3.523-16.65h7.476l-3.725 17.639q-.153.81-.153 1.47 0 .887.33 1.52.33.608 1.216.608.76 0 1.394-.33.634-.354 1.14-.962.533-.608.913-1.445.405-.861.71-1.85l3.522-16.65h7.476l-3.725 17.639q-.127.43-.178.861-.05.406-.05.811 0 1.09.506 1.52.533.406 1.622.406.76 0 1.394-.33.66-.354 1.191-.962.532-.608.938-1.445.405-.861.684-1.85z"/><path style="-inkscape-font-specification:Lobster" d="M115.212 146.086q-.735 2.104-1.648 3.65-.887 1.546-1.875 2.61-.963 1.064-2.002 1.723-1.014.66-1.977 1.014-.963.355-1.85.481-.861.127-1.546.127-1.165 0-2.18-.355-1.013-.354-1.773-1.115-.735-.76-1.166-1.926-.43-1.166-.43-2.813 0-.71.1-1.546.102-.861.305-1.85l5.55-26 7.679-1.04-5.956 28.029q-.127.43-.177.861-.026.406-.026.811 0 1.09.507 1.52.507.406 1.597.406.76 0 1.47-.33.735-.354 1.343-.962t1.09-1.445q.481-.861.785-1.85z"/><path style="-inkscape-font-specification:Lobster" d="M108.344 168.362l8.667-40.852h7.476l-.836 3.903q1.14-.963 2.61-1.596 1.47-.634 3.446-.634 1.318 0 2.484.43 1.166.406 2.002 1.37.862.937 1.343 2.508.507 1.571.507 3.878 0 1.748-.254 3.801-.228 2.027-.81 4.08-.583 2.027-1.546 3.928-.938 1.875-2.357 3.32-1.42 1.444-3.37 2.331-1.927.862-4.436.862-.988 0-1.723-.152-.735-.152-1.267-.405-.507-.254-.862-.583-.33-.355-.557-.71l-2.686 12.646zm11.353-18.373q.152.43.608.811.482.38 1.369.38 1.368 0 2.433-.684 1.064-.71 1.875-1.85.811-1.166 1.368-2.636.558-1.47.913-3.015.355-1.546.507-3.041.177-1.521.177-2.737 0-1.496-.279-2.357-.278-.862-.684-1.293-.38-.43-.836-.532-.456-.127-.811-.127-.887 0-1.876.66-.963.633-1.697 1.9z"/></g></g>
            <title>Gulp</title>
        </symbol>
        </svg>


        <!-- in a wrapping container include a section and a nested div containing all the svg icons -->

        <div class="container">
        
        <section class="stack">

            <div class="stack__icons">
            <svg>
                <use href="#html-icon"/>
            </svg>
            <svg>
                <use href="#css-icon"/>
            </svg>
            <svg>
                <use href="#bootstrap-icon"/>
            </svg>
            <svg>
                <use href="#sass-icon"/>
            </svg>
            <svg>
                <use href="#stylus-icon"/>
            </svg>
            <svg>
                <use href="#jquery-icon"/>
            </svg>
            <svg>
                <use href="#js-icon"/>
            </svg>
            <svg>
                <use href="#svg-icon"/>
            </svg>
            <svg>
                <use href="#d3-icon"/>
            </svg>
            <svg>
                <use href="#react-icon"/>
            </svg>
            <svg>
                <use href="#git-icon"/>
            </svg>
            <svg>
                <use href="#gulp-icon"/>
            </svg>
            </div>

        </section>

        </div>
    </div>    
</template>

<script>
export default {
  name: 'Stack',  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	min-height: 100vh;
	width: 100%;
	background: #ededed;
}

.container section.stack {
	margin: 0 auto;
	padding: 2rem;
}

.container section.stack div.stack__icons {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.container section.stack div.stack__icons svg {
	width: 90px;
	height: 90px;
	margin: 12px;
}

@media screen and (min-width: 700px) {
	.container section.stack {
		width: 700px;
		height: 700px;
	}

	.container section.stack div.stack__icons {
		position: relative;
		height: 100%;
	}

	.container section.stack div.stack__icons svg {
		position: absolute;
		width: 90px;
		height: 90px;
		top: calc(50% - 45px);
		left: calc(50% - 45px);
	}

	.container section.stack div.stack__icons svg:nth-of-type(1) {
		transform: rotate(-30deg) translateX(250px) rotate(30deg);
		animation: slideIn 5s 2s ease both, levitate 1s 2 ease-in;
		z-index: 49;
	}

	.container section.stack div.stack__icons svg:nth-of-type(2) {
		transform: rotate(-60deg) translateX(250px) rotate(60deg);
		animation: slideIn 5s 2s ease both, levitate 1s 2 ease-in;
		z-index: 48;
	}

	.container section.stack div.stack__icons svg:nth-of-type(3) {
		transform: rotate(-90deg) translateX(250px) rotate(90deg);
		animation: slideIn 5s 2s ease both, levitate 1s 2 ease-in;
		z-index: 47;
	}

	.container section.stack div.stack__icons svg:nth-of-type(4) {
		transform: rotate(-120deg) translateX(250px) rotate(120deg);
		animation: slideIn 5s 2s ease both, levitate 1s 2 ease-in;
		z-index: 46;
	}

	.container section.stack div.stack__icons svg:nth-of-type(5) {
		transform: rotate(-150deg) translateX(250px) rotate(150deg);
		animation: slideIn 5s 2s ease both, levitate 1s 2 ease-in;
		z-index: 45;
	}

	.container section.stack div.stack__icons svg:nth-of-type(6) {
		transform: rotate(-180deg) translateX(250px) rotate(180deg);
		animation: slideIn 5s 2s ease both, levitate 1s 2 ease-in;
		z-index: 44;
	}

	.container section.stack div.stack__icons svg:nth-of-type(7) {
		transform: rotate(-210deg) translateX(250px) rotate(210deg);
		animation: slideIn 5s 2s ease both, levitate 1s 2 ease-in;
		z-index: 43;
	}

	.container section.stack div.stack__icons svg:nth-of-type(8) {
		transform: rotate(-240deg) translateX(250px) rotate(240deg);
		animation: slideIn 5s 2s ease both, levitate 1s 2 ease-in;
		z-index: 42;
	}

	.container section.stack div.stack__icons svg:nth-of-type(9) {
		transform: rotate(-270deg) translateX(250px) rotate(270deg);
		animation: slideIn 5s 2s ease both, levitate 1s 2 ease-in;
		z-index: 41;
	}

	.container section.stack div.stack__icons svg:nth-of-type(10) {
		transform: rotate(-300deg) translateX(250px) rotate(300deg);
		animation: slideIn 5s 2s ease both, levitate 1s 2 ease-in;
		z-index: 40;
	}

	.container section.stack div.stack__icons svg:nth-of-type(11) {
		transform: rotate(-330deg) translateX(250px) rotate(330deg);
		animation: slideIn 5s 2s ease both, levitate 1s 2 ease-in;
		z-index: 39;
	}

	.container section.stack div.stack__icons svg:nth-of-type(12) {
		transform: rotate(-360deg) translateX(250px) rotate(360deg);
		animation: slideIn 5s 2s ease both, levitate 1s 2 ease-in;
		z-index: 38;
	}
}

@-moz-keyframes levitate {
	0%, 100% {
		transform: translateX(250px) translateY(0);
	}

	50% {
		transform: translateX(250px) translateY(18px);
	}
}

@-webkit-keyframes levitate {
	0%, 100% {
		transform: translateX(250px) translateY(0);
	}

	50% {
		transform: translateX(250px) translateY(18px);
	}
}

@-o-keyframes levitate {
	0%, 100% {
		transform: translateX(250px) translateY(0);
	}

	50% {
		transform: translateX(250px) translateY(18px);
	}
}

@keyframes levitate {
	0%, 100% {
		transform: translateX(250px) translateY(0);
	}

	50% {
		transform: translateX(250px) translateY(18px);
	}
}

@-moz-keyframes slideIn {
	0% {
		transform: rotate(0) translateX(250px) rotate(0);
	}
}

@-webkit-keyframes slideIn {
	0% {
		transform: rotate(0) translateX(250px) rotate(0);
	}
}

@-o-keyframes slideIn {
	0% {
		transform: rotate(0) translateX(250px) rotate(0);
	}
}

@keyframes slideIn {
	0% {
		transform: rotate(0) translateX(250px) rotate(0);
	}
}
</style>