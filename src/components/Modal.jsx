import React from "react";

function Modal() {
    return (
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 className="small" class="modal-title" id="exampleModalCenterTitle">
                            <p className="text-center small text-secondary">
                                Votre plateform est en cours de développement!
                            </p>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p className="font-weight-bold text-center">
                            Merci de nous laisser votre adresse mail, afin d'être notifier lors de la mise en ligne complète.
                        </p>
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" name="email" id="email" placeholder="votre Email" />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Envoyer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal