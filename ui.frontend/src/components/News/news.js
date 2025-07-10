import React, {useEffect, useState} from 'react';
import api from "../../axios";
import './news.css'

const News = (props) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        const idParam = new URLSearchParams(window.location.search).get('id')
        api.post("/getNewsByPath", {
            "query": "query getNewsByPath($path: String!) { not_ciaByPath(_path: $path) {item {title subtitle date author image {... on ImageRef {_path}} body {html}}}}",
            "variables": {
                "path": `/content/dam/aem-spa-sccp/contentfragments/news/${idParam}`
            }
        })
            .then((r) => {
                console.log(r.data)
                setData(r.data.data.not_ciaByPath.item);
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    if (loading) {
        return <div>Carregando notícia...</div>;
    }

    if (error) {
        return <div>Não foi possível recuperar a notícia.</div>
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="w-50">
                <div>
                    <h1 className="text-black fw-bolder l">{data.title}</h1>
                    <h3 className="text-black fw-bolder">{data.subtitle}</h3>
                    <p className="fs-6">{Intl.DateTimeFormat('pt-BR', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(data.date))} - {data.author}</p>
                </div>
                <img className="w-100 my-3" src={`${data.image._path}`} alt=""/>
                <div dangerouslySetInnerHTML={{ __html: data.body.html }} />
            </div>
        </div>
    )
}

export default News;