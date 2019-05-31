import axios from 'axios';
import Cookies from 'js-cookie';
import {getCookieFromReq} from '../helpers/util';

const axiosInstance= axios.create({

    baseURL:'http://localhost:3000/api/v1',
    timeout: 3000

});


const setauthHeader=(req)=>{
    const token= req? getCookieFromReq(req, 'jwt'):Cookies.getJSON('jwt');
    if(token){
        return {headers:{'authorization': `Bearer ${token}`}}
    }
    return undefined;
}

const rejectPromise=(resError)=>{
    let error={};
    if(resError && resError.response && resError.response.data){
       error=resError.response.data;
    }else{
        error=resError;
    }
    return Promise.reject(error);
}


export const getSecretData= async (req)=>{
    return await axiosInstance.get('/secret',setauthHeader(req)).then(response=> response.data);
}

export const getPortfolio= async ()=>{
    return await axiosInstance.get('/portfolio').then(response=> response.data);
}

export const createPortfolio= async (portfolioData)=>{
    return await axiosInstance.post('/portfolio',portfolioData, setauthHeader()).then(response=> response.data)
    .catch(error=> rejectPromise(error))

}

export const getPortfolioById=async (id)=>{
    return await axiosInstance.get(`/portfolio/${id}`).then(response=> response.data)
}

export const updatePortfolio= async (portfolioData)=>{
    return await axiosInstance.patch(`/portfolio/${portfolioData._id}`,portfolioData, setauthHeader()).then(response=> response.data)
    .catch(error=> rejectPromise(error))

}

export const deletePortfolio=(portfolioId)=>{
    return axiosInstance.delete(`/portfolio/${portfolioId}`, setauthHeader()).then(response=> response.data);

}

//....................Blog.....................

export const getBlogBySlug=async (slug)=>{
    return await axiosInstance.get(`/blogs/s/${slug}`).then(response=> response.data)
}

export const getBlogs= async ()=>{
    return await axiosInstance.get('/blogs').then(response=> response.data);
}

export const createBlog=(blogData,lockId)=>{
    return axiosInstance.post(`/blogs?lockId=${lockId}`,blogData, setauthHeader())
                        .then(response=> response.data)
                        .catch(err=>rejectPromise(err))
}


export const getBlogById=async (blogId)=>{
    return await axiosInstance.get(`/blogs/${blogId}`).then(response=> response.data)
}


export const updateBlog=(blogData,blogId)=>{
    return axiosInstance.patch(`/blogs/${blogId}`,blogData, setauthHeader())
                        .then(response=> response.data)
                        .catch(err=>rejectPromise(err))   
}

export const getUserBlogs= async (req)=>{
    return await axiosInstance.get('/blogs/me',setauthHeader(req)).then(response=> response.data);
}

export const deleteBlog=(blogId)=>{
    return axiosInstance.delete(`/blogs/${blogId}`, setauthHeader())
                        .then(response=> response.data)
                        .catch(err=>rejectPromise(err)) 

}
