import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { records } from './data';

export const Pagination = ()=>{
    const [page,setPage] = useState(1)
    const recordsPerPage = 5;
    const lastIndex = page * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const data = records.slice(firstIndex,lastIndex);
    const nPage = Math.ceil(records.length / recordsPerPage)
    const numbers = [...Array(nPage+1).keys()].slice(1)
    
    const prevPage = (event)=>{
        setPage(page - 1)
    }
    const changeCPage = (event)=>{
        setPage(event)
    }
    const nextPage = (event)=>{
        setPage(page + 1)
    }
    console.log('page',page)
    return (
        <div>
            <table className='table'>
            <thead>
                <th>
                    ID
                </th>
                <th>
                    NAME
                </th>
                <th>
                    EMAIL
                </th>
            </thead>
            <tbody>
                {
                    data.map((d,i)=>{
                        return <tr key={i}>
                            <td>
                                {d.id}
                            </td>
                            <td>
                                {d.name}
                            </td>
                            <td>
                                {d.email}
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <nav>
            <ul className='pagination'>
                <li className='page-item'>
                    <a href='#' className='page-link' onClick={prevPage}>Prev</a>
                </li>
                {
                    numbers.map((n,i)=>{
                        return <li className={`page-item ${page === n ? 'active': 'inactive'}`} key={i}>
                        <a href='#' className='page-link' onClick={()=>{
                            setPage(n)
                        }}>{n}</a>
                    </li>
                    })
                }
                  <li className='page-item'>
                    <a href='#' className='page-link' onClick={nextPage}>Next</a>
                </li>
            </ul>
        </nav>
        </div>
    )
}