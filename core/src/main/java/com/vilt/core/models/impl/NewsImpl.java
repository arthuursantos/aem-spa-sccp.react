package com.vilt.core.models.impl;

import com.vilt.core.models.NewsModel;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
        adaptables = Resource.class,
        adapters = NewsModel.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class NewsImpl implements NewsModel {

    @ValueMapValue
    private String title;
    @ValueMapValue
    private String fileReference;

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public String getFileReference() {
        return fileReference;
    }

}
