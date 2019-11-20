'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Application documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutModule.html" data-type="entity-link">AboutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutModule-a63bab84395fae6f2e9befad90b76bc2"' : 'data-target="#xs-components-links-module-AboutModule-a63bab84395fae6f2e9befad90b76bc2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutModule-a63bab84395fae6f2e9befad90b76bc2"' :
                                            'id="xs-components-links-module-AboutModule-a63bab84395fae6f2e9befad90b76bc2"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutRoutingModule.html" data-type="entity-link">AboutRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link">AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountModule-6d1f5a517eb10b5384ea8ae18ecede40"' : 'data-target="#xs-components-links-module-AccountModule-6d1f5a517eb10b5384ea8ae18ecede40"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountModule-6d1f5a517eb10b5384ea8ae18ecede40"' :
                                            'id="xs-components-links-module-AccountModule-6d1f5a517eb10b5384ea8ae18ecede40"' }>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileEditComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountRoutingModule.html" data-type="entity-link">AccountRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-654237ff29bd2eb05124e2d9b657fa94"' : 'data-target="#xs-components-links-module-AppModule-654237ff29bd2eb05124e2d9b657fa94"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-654237ff29bd2eb05124e2d9b657fa94"' :
                                            'id="xs-components-links-module-AppModule-654237ff29bd2eb05124e2d9b657fa94"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-654237ff29bd2eb05124e2d9b657fa94"' : 'data-target="#xs-injectables-links-module-AppModule-654237ff29bd2eb05124e2d9b657fa94"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-654237ff29bd2eb05124e2d9b657fa94"' :
                                        'id="xs-injectables-links-module-AppModule-654237ff29bd2eb05124e2d9b657fa94"' }>
                                        <li class="link">
                                            <a href="injectables/BreadCrumbsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BreadCrumbsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModelsModule.html" data-type="entity-link">ModelsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModelsModule-856ec6c966dc7bf60ca44fcecca5d8c8"' : 'data-target="#xs-components-links-module-ModelsModule-856ec6c966dc7bf60ca44fcecca5d8c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModelsModule-856ec6c966dc7bf60ca44fcecca5d8c8"' :
                                            'id="xs-components-links-module-ModelsModule-856ec6c966dc7bf60ca44fcecca5d8c8"' }>
                                            <li class="link">
                                                <a href="components/FileEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FileEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FileTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FileTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UploadComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModelsRoutingModule.html" data-type="entity-link">ModelsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-d6586968cff7475439dc9eb5bb471cc8"' : 'data-target="#xs-components-links-module-SharedModule-d6586968cff7475439dc9eb5bb471cc8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-d6586968cff7475439dc9eb5bb471cc8"' :
                                            'id="xs-components-links-module-SharedModule-d6586968cff7475439dc9eb5bb471cc8"' }>
                                            <li class="link">
                                                <a href="components/AccountMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlertComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CallbackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CallbackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DataTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FourComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FourComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IdRendererGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IdRendererGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavIconsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavIconsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchToolPanelGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchToolPanelGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SimulationsGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SimulationsGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UnderConstructionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UnderConstructionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SharedModule-d6586968cff7475439dc9eb5bb471cc8"' : 'data-target="#xs-injectables-links-module-SharedModule-d6586968cff7475439dc9eb5bb471cc8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-d6586968cff7475439dc9eb5bb471cc8"' :
                                        'id="xs-injectables-links-module-SharedModule-d6586968cff7475439dc9eb5bb471cc8"' }>
                                        <li class="link">
                                            <a href="injectables/ModelService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ModelService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SimulationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SimulationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VisualizationsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>VisualizationsService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-d6586968cff7475439dc9eb5bb471cc8"' : 'data-target="#xs-pipes-links-module-SharedModule-d6586968cff7475439dc9eb5bb471cc8"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-d6586968cff7475439dc9eb5bb471cc8"' :
                                            'id="xs-pipes-links-module-SharedModule-d6586968cff7475439dc9eb5bb471cc8"' }>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FormatTimeForHumansPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormatTimeForHumansPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SimulateModule.html" data-type="entity-link">SimulateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SimulateModule-14684cc720971065b8a6c5bb8715f164"' : 'data-target="#xs-components-links-module-SimulateModule-14684cc720971065b8a6c5bb8715f164"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SimulateModule-14684cc720971065b8a6c5bb8715f164"' :
                                            'id="xs-components-links-module-SimulateModule-14684cc720971065b8a6c5bb8715f164"' }>
                                            <li class="link">
                                                <a href="components/BrowseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BrowseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewSimulationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewSimulationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PastSimulationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PastSimulationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SimulateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SimulateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatusComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SimulateRoutingModule.html" data-type="entity-link">SimulateRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VisualizeModule.html" data-type="entity-link">VisualizeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VisualizeModule-f06a3b600867f6802ea876c92cf1c105"' : 'data-target="#xs-components-links-module-VisualizeModule-f06a3b600867f6802ea876c92cf1c105"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VisualizeModule-f06a3b600867f6802ea876c92cf1c105"' :
                                            'id="xs-components-links-module-VisualizeModule-f06a3b600867f6802ea876c92cf1c105"' }>
                                            <li class="link">
                                                <a href="components/VegaViewerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VegaViewerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VisualizeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VisualizeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VisualizeRoutingModule.html" data-type="entity-link">VisualizeRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangedParameter.html" data-type="entity-link">ChangedParameter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Format.html" data-type="entity-link">Format</a>
                            </li>
                            <li class="link">
                                <a href="classes/Identifier.html" data-type="entity-link">Identifier</a>
                            </li>
                            <li class="link">
                                <a href="classes/JournalReference.html" data-type="entity-link">JournalReference</a>
                            </li>
                            <li class="link">
                                <a href="classes/Model.html" data-type="entity-link">Model</a>
                            </li>
                            <li class="link">
                                <a href="classes/Simulation.html" data-type="entity-link">Simulation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Simulator.html" data-type="entity-link">Simulator</a>
                            </li>
                            <li class="link">
                                <a href="classes/Taxon.html" data-type="entity-link">Taxon</a>
                            </li>
                            <li class="link">
                                <a href="classes/Timecourse.html" data-type="entity-link">Timecourse</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/Visualization.html" data-type="entity-link">Visualization</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link">AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BreadCrumbsService.html" data-type="entity-link">BreadCrumbsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link">DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileService.html" data-type="entity-link">FileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GridService.html" data-type="entity-link">GridService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilsService.html" data-type="entity-link">UtilsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptorService.html" data-type="entity-link">AuthInterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/NavItem.html" data-type="entity-link">NavItem</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});