const isClient = (req, res, next) => {
	if (!req.session.isWorker) {
		next()
	} else {
		res.redirect('/')
	}
}

module.exports = isClient