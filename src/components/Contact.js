import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className="container my-5">
                <h3 className='text-center text-secondary'><strong>Contact Me For Any Queries </strong></h3>
                <form className="row g-3 needs-validation" novalidate>
                    <div className="col-md-4">
                        <label for="validationCustom01" className="form-label">Your Full Name</label>
                        <input type="text" className="form-control" id="validationCustom01" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustomUsername" className="form-label">Username(Gmail Prefered)</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom03" className="form-label">City</label>
                        <input type="text" className="form-control" id="validationCustom03" required />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom04" className="form-label">Nationality</label>
                        <select className="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid Country.
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label for="validationCustom01" className="form-label">Your Query</label>
                        <input type="text" className="form-control" id="validationCustom01" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                   
                    <div className="col-4">
                        <button className="btn btn-primary" type="submit">Send Me</button>
                        <div className='mx-2'>Have Patience . I will definately reply.</div>
                    </div>
                </form>
                
            </div>
        </div>
    )
}
