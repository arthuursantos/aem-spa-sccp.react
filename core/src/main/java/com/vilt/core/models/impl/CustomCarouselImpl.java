package com.vilt.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.vilt.core.models.CustomCarouselModel;
import com.vilt.core.models.NewsModel;
import com.vilt.core.models.PlayerModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.List;

@Model(
        adaptables = SlingHttpServletRequest.class,
        adapters = { CustomCarouselModel.class, ComponentExporter.class},
        resourceType = CustomCarouselImpl.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class CustomCarouselImpl implements CustomCarouselModel, ComponentExporter {

    static final String RESOURCE_TYPE = "aem-spa-sccp/components/carousel";

    @ChildResource
    private List<NewsModel> newsAssets;
    @ChildResource
    private List<PlayerModel> playerAssets;
    @ValueMapValue
    private String contentType;

    @Override
    public List<NewsModel> getNewsAssets() {
        return newsAssets;
    }
    @Override
    public List<PlayerModel> getPlayerAssets() {
        return playerAssets;
    }

    @Override
    public String getContentType() {
        return contentType;
    }

    @Override
    public String getExportedType() {
        return CustomCarouselImpl.RESOURCE_TYPE;
    }

}
