import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { FnDesc } from './fn-desc.model';
import { FnDescService } from './fn-desc.service';

import { Principal } from '../../shared';

@Component({
    selector: 'jhi-fn-desc-detail',
    templateUrl: './fn-desc-detail.component.html'
})
export class FnDescDetailComponent implements OnInit, OnDestroy {

    fnDesc: FnDesc;
    private subscription: Subscription;
    private eventSubscriber: Subscription;
    currentAccount: any;

    constructor(
        private eventManager: JhiEventManager,
        private fnDescService: FnDescService,
        private route: ActivatedRoute,
        private principal: Principal
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInFnDescs();
    }

    load(id) {
        this.fnDescService.find(id).subscribe((fnDesc) => {
            this.fnDesc = fnDesc;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInFnDescs() {
        this.eventSubscriber = this.eventManager.subscribe(
            'fnDescListModification',
            (response) => this.load(this.fnDesc.id)
        );
    }
}
